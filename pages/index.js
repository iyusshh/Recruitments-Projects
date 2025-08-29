import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import data from "@/data/blogs.json";



export default function Home() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return data.filter((item) => {
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.author && item.author.toLowerCase().includes(q)) ||
        item.tags?.some((t) => t.toLowerCase().includes(q));

      const matchesType = type === "all" || item.type === type;
      return matchesQuery && matchesType;
    });
  }, [query, type]);

  return (
    <Layout>
      <section className="container">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Blog Project Showcase</h1>
        <p className="opacity-80 mb-6">Search, filter, and explore items. Click a card for full details.</p>
        <SearchBar query={query} setQuery={setQuery} type={type} setType={setType} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filtered.map((item) => <Card key={item.id} item={item} />)}
          {filtered.length === 0 && <p className="opacity-70">No results. Try another search.</p>}
        </div>
        <div id="about" className="mt-16 prose dark:prose-invert max-w-none">
          <h2>About</h2>
          <p>Hello my dear recuiters🥀. This projejct uses Next.js , TailwindCSS, a local JSON data source(had bugs with FetchAPI calls), client-side search/filter, and a Read more button to view detailed page.</p>
        </div>
      </section>
    </Layout>
  );
}
