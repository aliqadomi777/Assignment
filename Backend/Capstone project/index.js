import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];
let postIdCounter = 1;

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.render("edit.ejs", { post });
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: postIdCounter++,
    title,
    content,
    createdAt: new Date(),
  };
  posts.push(newPost);
  res.redirect("/");
});

app.post("/posts/:id/update", (req, res) => {
  const { title, content } = req.body;
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");

  post.title = title;
  post.content = content;
  post.updatedAt = new Date();

  res.redirect("/");
});

app.post("/posts/:id/delete", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send("Post not found");

  posts.splice(postIndex, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
