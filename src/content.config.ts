import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      coverImage: image(),
      coverImageAlt: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          })
        )
        .optional(),
      tags: z.array(z.string()).default([]),
      location: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
