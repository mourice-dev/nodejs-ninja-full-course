/** @format */

const express = require("express");
const morgan = require("morgan");
const dns = require("dns");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes.js");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const app = express();

const DBURI =
  "mongodb+srv://nshutikope_db_user:maurice1234@cluster0.js5ufxz.mongodb.net/node-tus?retryWrites=true&w=majority";
mongoose
  .connect(DBURI)
  .then((result) => {
    console.log("database connect");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extend: true }));
// server routes

app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//Blog routes
app.use("/blogs",blogRoutes);
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// app.use((req, res, next) => {
//   console.log(req.hostname);
//   console.log(req.url);
//   console.log(req.path);
//   console.log(req.method);
//   next();
// });

// const blogs = [
//   {
//     title: "Yoshi finds eggs",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "Mario finds stars",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "How to defeat bowser",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "Yoshi finds eggs",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "Mario finds stars",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "How to defeat bowser",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "Yoshi finds eggs",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "Mario finds stars",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "How to defeat bowser",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "How to defeat bowser",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//   },
// ];
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog2",
//     snippet: "new blog snippet",
//     body: "body of new blog and more info",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

// app.get("/all-blog", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });
// app.get("/view-blog", (req, res) => {
//   Blog.findById("6a33ecfb76a43bde0855dae7")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });
