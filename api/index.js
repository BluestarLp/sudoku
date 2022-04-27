import { fstat } from "fs";

export default function handler(req, res) {
  fs.writeFileSync("index.html", "<h1>Hello World</h1>");
  res.status(200).json({
    message: 'Welcome to the API',
  });
}