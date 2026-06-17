// /** @format */

// // const http = require("http");
// // const fs = require("fs");

// // const server = http.createServer((req, res) => {
// //   console.log(req.url, req.method);
// //   res.setHeader("content-type", "text/html");
// //   const index = fs.readFileSync("./index.html");
// //   res.end(index);
// // });

// // server.listen(4000, "localhost", () => {
// //   console.log("server listening on port 4000");
// // });

// /** @format */

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");

//   let path = "./";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/about-me":
//       res.statusCode = 301;
//       res.setHeader("location", "./about");
//       res.end();
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, "localhost", () => {
//   console.log("listening for requests on port 3000");
// });

