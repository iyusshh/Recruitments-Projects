import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 backdrop-blur bg-white/70 dark:bg-gray-900/70">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-bold">My BlogSpot</Link>
        
        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <a href="#about" className="hover:underline">About</a>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
