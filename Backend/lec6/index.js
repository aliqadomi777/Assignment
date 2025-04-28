import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const array1 = [
  "Sam",
  "Grace",
  "Jack",
  "David",
  "Hannah",
  "Tina",
  "Ivy",
  "Nina",
  "Bob",
  "Frank",
];

const array2 = [
  "Frank",
  "Sam",
  "Grace",
  "Kelly",
  "Ivy",
  "Quincy",
  "Rachel",
  "Charlie",
  "Eve",
  "Alice",
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    first: array1[Math.floor(Math.random() * array1.length)],
    last: array2[Math.floor(Math.random() * array1.length)],
  });
});
app.listen(port, () => {});
