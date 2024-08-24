const POST_FILE_EXT = '.md';

export function makeSlug(path: string): string | null | undefined {
	return path.split('/').at(-1)?.replace(POST_FILE_EXT, '');
}
