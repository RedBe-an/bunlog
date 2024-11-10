// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join('src/pages/posts');

export function getSortedPosts() {
  // /posts 디렉토리 내의 모든 파일을 읽어옵니다.
  const fileNames = fs.readdirSync(postsDirectory);

  // 파일마다 front matter를 추출하여 배열로 만듭니다.
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx')) // .mdx 파일만 필터링
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // gray-matter를 사용하여 front matter와 내용을 분리
      const { data } = matter(fileContents);

      // front matter에 `date` 필드가 없는 경우 처리
      if (!data.date) {
        throw new Error(`Missing date in front matter for file: ${fileName}`);
      }

      // `data.date`가 올바른 날짜 형식인지 확인
      const date = new Date(data.date);
      if (isNaN(date.getTime())) {
        throw new Error(`Invalid date format in front matter for file: ${fileName}`);
      }

      return {
        ...data,
        date: date.toISOString(), // 날짜를 ISO 문자열로 변환하여 일관되게 저장
        fileName: fileName.replace(/\.mdx$/, ''), // 파일명에서 확장자(.mdx)를 제거
      };
    });

  // 날짜 순으로 정렬 (최신 순)
  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
