import express from "express";
import https from "https";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { hostname } from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const options = {
    hostname: "https://api.wheretheiss.at/v1/satellites/25544",
    method: "GET",
  };
});
app.post("/submit", (req, res) => {
  res.render("index.ejs");
});
app.listen(port, () => {});
