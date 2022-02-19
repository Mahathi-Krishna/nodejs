// Import Express
const express = require("express");

// Create server using Express
const server = express();

// Listen to Port:3100
server.listen(3100, () => {
    console.log("Server is listening");
});

// Handle default request -> GET method -> server.get()
server.get("/", (req,res) => {
    res.end("Hello from express server.\n"+"Welcome to Express !!! You are now connected");
});