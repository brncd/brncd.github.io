import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    tags: z.array(z.string()),
    link: z.string(),
    order: z.number().optional(),
  }),
});

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    readTime: z.string(),
    image: image(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'blog': blogCollection,
};