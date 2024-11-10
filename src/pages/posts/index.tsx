// pages/index.tsx
import { GetStaticProps } from 'next';
import { getSortedPosts } from '@/lib/posts';
import { useEffect, useState } from 'react';

type Post = {
  title: string;
  date: string;
  summary: string;
  fileName: string;
};

type HomeProps = {
  allPostsData: Post[];
};

const Home = ({ allPostsData }: HomeProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {allPostsData.map(({ title, date, summary, fileName }) => (
          <li key={fileName}>
            <h2>{title}</h2>
            {/* 클라이언트에서만 날짜를 처리 */}
            {isClient ? (
              <p>{new Date(date).toLocaleDateString()}</p>
            ) : (
              <p>{date}</p> // 서버에서 렌더링된 날짜 그대로 출력
            )}
            <p>{summary}</p>
            <a href={`/posts/${fileName}`}>Read more</a>
          </li>
        ))}
      </ul>
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

export default Home;
