/** @format */

const Blog = require("../Models/blog.js");

const blog_inx = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "Home", blogs: result });
    })
    .catch((err) => console.log(err));
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then((result) => {
    res.redirect("blogs");
  });
};
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create" });
};

const blog_details = (req, res) => {
  id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { title: "details", blog: result });
    })
    .catch((err) => res.status(404).render("404", { title: "not found"}));
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_inx,
  blog_create_post,
  blog_create_get,
  blog_details,
  blog_delete,
};
