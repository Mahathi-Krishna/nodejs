// Import Http
const http = require("http");

// Create Server and listen to Port:3300
http.createServer((req,res)=>{
    res.end("Hello, this is a sample server");
}).listen(3300);

console.log("Hello from sample server js");