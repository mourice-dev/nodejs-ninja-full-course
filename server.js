/** @format */

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("content-type", "text/html");
  const index = fs.readFileSync("./index.html");
  res.end(index);
});

server.listen(4000, "localhost", () => {
  console.log("server listening on port 4000");
});
