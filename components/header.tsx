import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Bamhire
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            About Bamhire
          </Link>
          <Link
            href="/advantage"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            The Bamhire Advantage
          </Link>
          <Link
            href="/insights"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            News & Insights
          </Link>
          <Link
            href="/investors"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Investors
          </Link>
        </nav>
        <Button variant="default" size="sm">
          Find a Job
        </Button>
      </div>
    </header>
  );
}
