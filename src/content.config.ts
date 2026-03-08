import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lore = defineCollection({
	// This loader looks specifically for .md files in src/content/lore
	loader: glob({ pattern: "**/*.md", base: "./src/content/lore" }),
	schema: z.object({
		// We make everything optional so the build doesn't fail if a file is missing a field
		title: z.string().optional(),
		description: z.string().optional(),
		image: z.string().optional(),
	}),
});

export const collections = { lore };