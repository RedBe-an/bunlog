import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={`py-40 ${inter.className}`}>
      <div className="overflow-hidden pb-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 items-center text-center">
            <h1 className="mb-8 text-pretty text-4xl font-medium lg:text-8xl">
              Bunlog
            </h1>
            <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-xl">
              번로그입니다.
            </p>
            <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
              <Button>
                최신 글 보기
                <ChevronRight className="ml-2 h-4" />
              </Button>
              <Button variant="outline">
                RedBe-an에 대해
                <ChevronRight className="ml-2 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
