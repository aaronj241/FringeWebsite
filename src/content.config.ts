import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { projectCategories } from './data/site';

const categoryIds = projectCategories.map(({ id }) => id) as [
  (typeof projectCategories)[number]['id'],
  ...(typeof projectCategories)[number]['id'][],
];

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.md' }),
  schema: ({ image }) => {
    const visual = z.object({ image: image(), alt: z.string() });

    return z.object({
      title: z.string(),
      description: z.string(),
      categories: z.array(z.enum(categoryIds)).min(1),
      order: z.number().int(),
      cover: visual,
      gallery: z.array(visual).default([]),
      industry: z.string().optional(),
      published: z.iso.date().optional(),
      projectUrl: z.url().optional(),
    });
  },
});

export const collections = { projects };
