import z from 'zod';

const TagSchema = z.string();

export const PostSchema = z.object({
	date: z.string().date(),
	isPublished: z.boolean(),
	slug: z.string(),
	tags: z.array(TagSchema),
	title: z.string()
});

export type Post = z.infer<typeof PostSchema>;

export const PostFileSchema = z.object({
	default: z.string(),
	metadata: PostSchema.omit({
		slug: true
	})
});

export type PostFile = z.infer<typeof PostFileSchema>;
