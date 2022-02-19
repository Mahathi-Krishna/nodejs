// Function returnData using Promise
function returnData(num){
    const promise = new Promise((resolve,reject) => {
        if(num < 5)
            reject("num < 5 ");
        else
            setTimeout(() => {resolve("Data from promise function") },2000);
    });

    return promise;
};

// Call the function returnData()
const promiseData = returnData(4);

// Handling the returned Promise
promiseData.then(
    (resolve) => {
        console.log(resolve);
    },
    (reject) => {
        console.log("Error :"+reject);
    }
);

console.log("End of Promise.js");