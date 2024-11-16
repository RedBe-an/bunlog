// pages/index.tsx
import { GetStaticProps } from "next";
import { getSortedPosts } from "@/lib/posts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Badge 컴포넌트 가져오기

type Post = {
  title: string;
  date: string;
  summary: string;
  tags: string[]; // tags를 문자열 배열로 정의
  fileName: string;
};

type PostsProps = {
  allPostsData: Post[];
};

const Posts = ({ allPostsData }: PostsProps) => {
  return (
    <div
      className={`font-BunFnNeo grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-15 sm:p-20`}
    >
      <main className="flex flex-col row-start-2 items-start sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4">
          Posts
        </h1>
        {allPostsData.map(({ title, date, summary, tags, fileName }) => (
          <div key={fileName}>
            <Card className="min-w-screen p-4">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  <p>{new Date(date).toLocaleDateString()}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {summary}
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} className="text-sm font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a
                  className="font-medium text-primary underline underline-offset-4"
                  href={`/posts/${fileName}`}
                >
                  더 읽어보기
                </a>
              </CardFooter>
            </Card>
            <br />
          </div>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Posts;
