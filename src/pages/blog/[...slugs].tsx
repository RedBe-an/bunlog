import { getAllPosts } from "@/lib/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { serializeMdx } from "@/lib/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slugs: post.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const posts = getAllPosts();
  const post = posts.find((post) => {
    return JSON.stringify(post.slug) === JSON.stringify(slugs);
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdx = await serializeMdx(post.content);

  return {
    props: { mdx },
  };
};

export default function PostPage({ mdx }: { mdx: MDXRemoteSerializeResult }) {
  return (
    <div className="prose dark:prose-dark">
      <MDXRemote {...mdx} />
    </div>
  );
}
