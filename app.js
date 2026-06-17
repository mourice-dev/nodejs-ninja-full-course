/** @format */

const express = require("express");
const morgan = require("morgan");
const app = express();

app.listen(3000);

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(req.hostname);
  console.log(req.url);
  console.log(req.path);
  console.log(req.method);
  next();
});

const blogs = [
  {
    title: "Yoshi finds eggs",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Mario finds stars",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "How to defeat bowser",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Yoshi finds eggs",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Mario finds stars",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "How to defeat bowser",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Yoshi finds eggs",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Mario finds stars",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "How to defeat bowser",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "How to defeat bowser",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
