import data from "./data/blogs.json";
export default function handler(req, res) {
  res.status(200).json(data);
}
