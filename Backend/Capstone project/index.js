import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const activePosts = postsCollection.filter((p) => p !== undefined);
  res.render("index.ejs", { posts: activePosts });
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/posts", (req, res) => {
  const { author, title, message } = req.body;
  createPost(author, title, message);
  res.redirect("/");
});
app.get("/posts/:id/edit", (req, res) => {
  const post = postsCollection[req.params.id];
  if (!post) return res.status(404).send("Post not found");
  res.render("edit.ejs", { post });
});
app.post("/posts/:id", (req, res) => {
  const { title, message, author } = req.body;
  modifyPost(req.params.id, message, title, author);
  res.redirect("/");
});
app.post("/posts/:id/delete", (req, res) => {
  deletePost(req.params.id);
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});

///////////////////////////

let postsCollection = [];
let notUsedId = [];

class Post {
  constructor(author, title, message, id = null) {
    this.id = id !== null ? id : postsCollection.length;
    this.author = author;
    this.title = title;
    this.message = message;
    this.createdAt = new Date();
    this.modifiedAt = null;
  }

  modify(newMessage = this.message, newTitle = this.title, author) {
    const isChanged = newMessage !== this.message || newTitle !== this.title;
    const isAuthor = author === this.author;
    const isAdmin = author === "admin";

    if ((isAuthor && isChanged) || isAdmin) {
      if (newMessage !== this.message) this.message = newMessage;
      if (newTitle !== this.title) this.title = newTitle;
      this.modifiedAt = new Date();
    }
  }
}

function createPost(author, title, message) {
  let id = notUsedId.length > 0 ? notUsedId.shift() : postsCollection.length;
  postsCollection[id] = new Post(author, title, message, id);
}

function deletePost(id) {
  if (postsCollection[id]) {
    delete postsCollection[id];
    notUsedId.push(id);
  }
}

function modifyPost(id, newMessage, newTitle, author) {
  const post = postsCollection[id];
  if (post) {
    post.modify(newMessage, newTitle, author);
  }
}
