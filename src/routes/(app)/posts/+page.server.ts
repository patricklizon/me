import type { Post } from '$lib/schema/post';
import type { PageServerLoad } from './$types';
type LoadData = {
	posts: Post[];
};

export const load: PageServerLoad<LoadData> = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts = (await response.json()) as Post[];

	return { posts };
};
