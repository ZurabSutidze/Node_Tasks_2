////////////////////////     1    ////////////////////////

// const path = require("path");

// async function main(Path) {
//   try {
//     const NomalisedPath = path.normalize(Path);
//     const BaseName = path.basename(NomalisedPath);
//     const Dirname = path.dirname(NomalisedPath);
//     const ExtName = path.extname(NomalisedPath);

//     console.log(BaseName);
//     console.log(Dirname);
//     console.log(ExtName);
//   } catch(err) {
//       console.log(err)
//   }
// }

// main("asd/text.txt");

////////////////////////     2    ////////////////////////

// const fs = require("fs/promises");

// async function main(Folder) {
//     try {
//         const directories = await fs.readdir("../Node_Tasks_2")
//         console.log(directories)

//         if (directories.includes(Folder)) {
//             console.log(true)
//             return
//         }

//         console.log(false)
//     } catch(er) {
//         console.log(er)
//     }
// }
// main("asd")

////////////////////////     3    ////////////////////////

// const fs = require("fs/promises");
// const http = require("http");

// const server = http.createServer(async (req, res) => {
//   try {
//     const data = await fs.readFile("data.json");
//     const jsonData = JSON.parse(data);
//     res.end(JSON.stringify(jsonData));
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });

// server.listen(3000, "localhost", () => {
//   console.log("server started on localhost:3000");
// });


////////////////////////     4    ////////////////////////

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end(new Date().toISOString());
// });

// server.listen(3000, "localhost", () => {
//   console.log("server started on localhost:3000");
// });


////////////////////////     5    ////////////////////////

// const htmlTable = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Simple HTML Table</title>
// </head>
// <body>

// <table border="1">
//   <tr>
//     <th>Name</th>
//     <th>Age</th>
//     <th>City</th>
//   </tr>
//   <tr>
//     <td>John</td>
//     <td>25</td>
//     <td>New York</td>
//   </tr>
//   <tr>
//     <td>Alice</td>
//     <td>30</td>
//     <td>Los Angeles</td>
//   </tr>
//   <tr>
//     <td>Bob</td>
//     <td>20</td>
//     <td>Chicago</td>
//   </tr>
// </table>

// </body>
// </html>
// `;


// const http = require("http");

// const server = http.createServer((req, res) => {
//    res.end(htmlTable)
// });

// server.listen(3000, "localhost", () => {
//   console.log("server started on localhost:3000");
// });

