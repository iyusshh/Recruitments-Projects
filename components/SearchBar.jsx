export default function SearchBar({ query, setQuery, type, setType }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <input className="input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title, tag, or author..." />
      <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="all">All</option>
        <option value="blog">Blog</option>
        <option value="project">Project</option>
      </select>
      <a href="/api/blogs" target="_blank" rel="noreferrer" className="btn text-center">View JSON API</a>
    </div>
  );
}
