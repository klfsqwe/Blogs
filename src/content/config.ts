import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string().optional(),
    }),
});

const notes = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
    }),
});

export const collections = { blog, notes };
