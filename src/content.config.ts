import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lore = defineCollection({
  // The glob loader physically targets your new directory
  loader: glob({ pattern: "**/*.md", base: "./src/content/lore" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  })
});

export const collections = { lore };
