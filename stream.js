// const fs = require("fs");

// const readStream = fs.createReadStream("./doc/Blog.txt", { encoding: 'utf8' });
// const writeStream = fs.createWriteStream("./doc/Blog1.txt");


// // readStream.on("data", (chunk) => {
// //     console.log("\n new Chunk \n")
// //     console.log(chunk);
// //     writeStream.write(chunk)
// // })
// readStream.pipe(writeStream)