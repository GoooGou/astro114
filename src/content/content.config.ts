// src/content.config.ts

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { format } from "date-fns";

// 定义一个 blog 集合
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string().transform((str) => format(new Date(str), "yyyy-MM-dd")),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string(),
  }),
});

// 或者定义一个用 JSON 做数据源的集合


// 导出所有集合
export const collections = {
  posts,
};
