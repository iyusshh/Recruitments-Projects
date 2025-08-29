export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Blog/Project Showcase</p>
        <p className="opacity-70">Built with Next.js + TailwindCSS</p>
      </div>
    </footer>
  );
}
