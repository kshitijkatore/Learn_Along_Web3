// const fs = require("fs");

// const contents = fs.readFile("a.txt", "utf-8"); // aysncronously
// console.log(contents);

//const contents2 = fs.readFileSync("a.txt", "utf-8"); // syncronously
//console.log(contents2);

// Functional arguments --> Passing a functions to another functions as an arguents.

function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mul(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

function dooperation(a, b, op){
    return op(a,b);
}

let ans = dooperation(2,3, sum);
console.log(ans);


// asyncronous functions
const fs = require("fs");

function print(err, contents){
    if(err){
        console.log("File not found..")
    }else{
        console.log(contents);
    }
}

fs.readFile("a.txt", "utf-8", print);  //asyncronously
fs.readFile("b.txt", "utf-8", print);  //asyncronously