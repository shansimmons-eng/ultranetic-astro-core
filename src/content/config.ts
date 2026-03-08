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

export const collections = { lore };