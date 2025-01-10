const http=require("http");
con















// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => { // Creating server
//     fs.readFile("sample.json", (err, data) => {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("ERROR");
//         } else {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(data);
//         }
//     });
// });

// server.listen(3000, () => {
//     console.log("Server is running on port http://localhost:3000");
// });








// const http=require("http")
// const modules=require("./modules");
// const file=require("./file");
// const server = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write(`Addition: ${modules.add(10, 23)}\n`);
//     res.write(`Subtraction: ${modules.sub(20, 10)}\n`);
//     res.write(`Multiplication: ${modules.mul(20, 10)}\n`);
//     res.write(`Division: ${modules.div(20, 10)}\n`);
//     res.end();
    
// });
// server.listen(3000,()=>{
//     console.log("server is running on port on  http://localhost:3000")
// })

// console.log(modules.add(10,12))