import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export const serializeMdx = (source: string) => {
  return serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkBreaks, remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypePrism,
        rehypeKatex,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
  });
};
