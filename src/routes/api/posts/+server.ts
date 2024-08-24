import { json } from '@sveltejs/kit';
import { PostFileSchema, type Post } from '$lib/schema/post';
import { logger } from '$lib/server/logger';
import { makeSlug } from '$lib/post';
import type { RequestHandler } from './$types';

async function readPosts(): Promise<Post[]> {
	const matchedFiles = import.meta.glob('$posts/*.md', { eager: true });
	const posts: Post[] = [];

	for (const [path, data] of Object.entries(matchedFiles)) {
		const result = await PostFileSchema.safeParseAsync(data);
		if (result.error) {
			logger.error(result.error, 'Imported file does not match schema');
			continue;
		}

		const slug = makeSlug(path);
		if (!slug) {
			logger.error({ path }, 'could not generate slug for path');
			continue;
		}

		const p = result.data.metadata;
		if (!p.isPublished) continue;

		posts.push({ ...p, slug });
	}

	return posts;
}

export const GET: RequestHandler = async () => {
	try {
		const posts = await readPosts();
		return json(posts);
	} catch (err) {
		logger.fatal(err, 'Unexpected error');
		return json([]);
	}
};
