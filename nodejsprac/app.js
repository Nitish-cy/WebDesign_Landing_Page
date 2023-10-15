const http = require("http");
const fs = require("fs");
const express=require('express')
const app=express();
// const server = http.createServer((req, res) => {
// //   const url = req.url;
// //   const method = req.method;
// //   //console.log(req,res)
// //   //Read data from Request
// //   //console.log(req.url,req.method,req.headers)
// //   //Response Method
// //   if (url === "/") {
// //     res.setHeader("content-type", "text/html");
// //     res.write("<html></html>");
// //     //res.write("<body><h1>Hello From My Node js Serve !</h1></body>")
// //     res.write(
// //       "<body><form action='/message' method='post'><input type='text'></input> <button type='Submit'>Send</button></form></body>"
// //     );
// //     res.end();
// //   }
// //   if (url === "/message" && method === "POST") {
// //     const body=[];
// //     req.on('data',(chunk)=>{
// //         console.log(chunk)
// //         body.push(chunk);
// //     })
// //     req.on('end' ,()=>{
// //         const parsebody=Buffer.concat(body).toString();
// //         const message=parsebody.split('=')[1]
// //         //console.log(parsebody)
// //          fs.writeFileSync('message.txt',message)
// //     })
// //    // fs.writeFileSync("response.txt", "Hello");
// //     res.setHeader("location", "/");
// //     return res.end();
// //   }
// //   //process.exit()


// });


// Using Express


server.listen(3000);
