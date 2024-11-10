import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pl-6 pt-5 font-bold">
      <Button variant="link">
        <Link href="/" className="text-lg">
          Home
        </Link>
      </Button>
      <Button variant="link">
        <Link href="/posts" className="text-lg">
          Posts
        </Link>
      </Button>
    </div>
  );
}
