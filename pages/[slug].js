import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import data from "@/data/blogs.json";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function Details() {
  const router = useRouter();
  const { slug } = router.query;
  const item = data.find((b) => b.slug === slug);

  if (!item) {
    return (
      <Layout>
        <p className="opacity-80">Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container">
        <Link href="/" className="text-sm underline">&larr; Back</Link>
        <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-2xl mt-3" />
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <span className="tag">{item.type}</span>
          {item.tags?.map((t) => <span className="tag" key={t}>#{t}</span>)}
        </div>
        <h1 className="text-3xl font-bold mt-3">{item.title}</h1>
        <p className="opacity-75 text-sm">By {item.author}</p>
        <div className="prose dark:prose-invert mt-6 max-w-none">
          <ReactMarkdown>{item.content}</ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
}
