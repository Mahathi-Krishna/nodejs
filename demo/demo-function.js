// Import Http
const http = require("http");
var data = "Hello, callback funtion is returning data";

// Create function
const printDataFunction = function printdata(data){
    return data;
}

// Create server and listen to Port:3300
http.createServer((req,res) => {
    res.end(printDataFunction(data));
}).listen(3300);

console.log("End of callback");