import { defineCollection, z } from 'astro:content';

const chaptersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    book: z.string(),
    bookSubtitle: z.string().optional(),
    bookSlug: z.string(), // URL slug, e.g. "genesis"
    chapterNumber: z.number(),
    title: z.string(),
  }),
});

export const collections = {
  chapters: chaptersCollection,
};
