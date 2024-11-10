export default function Posts() {
  return (
    <div
      className={`font-BunFnNeo grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-15 gap-8 sm:p-20`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            환영합니다!
          </h1>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            번로그에 오신 것을 환영합니다.
          </h2>
          <div className="leading-7 [&:not(:first-child)]:mt-6">
            여긴 작은 기록들이 모인 곳입니다. <div className="my-3" />
            예를 들어, 소설을 쓰고 싶으면 작은 문장들을 적어놓거나, 일기를 쓰고
            싶으면 일기를 쓰고, 기술 기록을 쓰고 싶으면 기술 기록을 쓰는
            곳입니다.
          </div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot;기록은 기억을 남긴다.&quot; -발타자르 그라시안
          </blockquote>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            기억하기 위해서
          </h3>
          <div className="leading-7 [&:not(:first-child)]:mt-6">
            가끔 머릿속에 무언가 떠오를 때가 있습니다. 다들 가끔 머릿속에 영감
            같은 게 떠오를 때가 있잖아요?
            <div className="my-3" />
            그것을 기록하지 않으면 그 기억은 점점 흐려지다 결국엔 망각의 벽
            너머로 가게 됩니다.
            <div className="my-3" />
            이런 사라지는 기억들을 붙잡기 위해서 이 블로그를 만들었습니다.
          </div>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            최근 포스트
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1번째 포스트</li>
            <li>2번째 포스트</li>
            <li>3번째 포스트</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
