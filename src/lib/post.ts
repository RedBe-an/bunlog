import { sync } from "glob";
import path from "path";
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

type PostMatter = {
  title: string;
  description: string;
  tags: string[];
  draft?: boolean;
  date: string;
};

type Post = PostMatter & {
  slug: string[];
  content: string;
  readingMinutes: number;
  wordCount: number;
};

const BASE_PATH = "posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = (postPath: string): Post | undefined => {
  try {
    // 파일 읽기 및 메타데이터 파싱
    const file = fs.readFileSync(postPath, { encoding: "utf8" });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    // draft 포스트 필터링
    if (grayMatter.draft) {
      return;
    }

    // 경로 정규화
    const normalizedPath = postPath
      .replace(process.cwd(), "")
      .replace(/\\/g, "/");

    // slug 배열 생성
    const slug = normalizedPath
      .slice(normalizedPath.indexOf(BASE_PATH) + BASE_PATH.length + 1)
      .replace(".mdx", "")
      .split("/");

    return {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format("YYYY-MM-DD"),
      content,
      slug,
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    };
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.reduce<Post[]>((acc, postPath) => {
    const post = parsePost(postPath);
    if (!post) return acc;
    return [...acc, post];
  }, []);
};
