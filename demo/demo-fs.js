// Import FS
const fs = require("fs");

// Callback function
function returnData(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
};

// Write file: Info.txt
fs.writeFile("./Info.txt",
    "Hello, Welcome to demo session \n",
    (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("Write completed");
        }
    }
);

// Read file: Info.txt
fs.readFile("./Info.txt", returnData);

// Modify file: Info.txt
fs.appendFile("./Info.txt",
    "Hello"+"\n"+"This is the Info file for Demo folder",
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Updated file: Info.txt");
        }
    }
);

// Read file: Info.txt
fs.readFile("./Info.txt", returnData);

console.log("End of fs");