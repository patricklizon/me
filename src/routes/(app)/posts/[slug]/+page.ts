import { error } from '@sveltejs/kit';
import { type PostFile } from '$lib/schema/post';
import type { PageLoad } from './$types';

async function readPost(slug: string): Promise<PostFile> {
	try {
		return await import(`$posts/${slug}.md`);
	} catch {
		error(404, `Could not find ${slug}`);
	}
}

type LoadData = {
	post: {
		content: string;
		meta: PostFile['metadata'];
	};
};

export const load: PageLoad<LoadData> = async ({ params }) => {
	const post = await readPost(params.slug);

	if (!post.metadata.isPublished) {
		return error(403, { message: 'Post is not published' });
	}

	return {
		content: post.default,
		meta: post.metadata
	};
};
