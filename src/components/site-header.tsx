import { Snowflake } from "lucide-react";

interface SiteHeaderProps {
  siteName: string;
}

export function SiteHeader({ siteName }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-purple-800">
      <div className="container flex h-16 items-center space-x-2">
        <Snowflake className="text-white" />
        <h1 className="text-white">{siteName}</h1>
      </div>
    </header>
  );
}
