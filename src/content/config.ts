import { defineCollection, z } from 'astro:content';

const lore = defineCollection({
	type: 'content',
	schema: z.object({
		// We make everything optional so the build doesn't fail if a file is missing a field
		title: z.string().optional(),
		description: z.string().optional(),
		image: z.string().optional(),
	}),
});

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { lore, blog };