import Link from "next/link";

export default function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="w-full h-60 object-cover rounded-xl" />
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="tag">{item.type}</span>
          {item.tags?.map((t) => <span className="tag" key={t}>#{t}</span>)}
        </div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-sm opacity-80">{item.description}</p>
        <Link href={`/${item.slug}`} className="btn mt-2">Read More</Link>
      </div>
    </div>
  );
}
