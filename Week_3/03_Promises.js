/*promises are used to handle asyncronous operations and 
its resulting value. promises are used to handle asyncronous operations more effectively than traditional callback functions, providing a cleaner and 
more manageable way to deal with code that executes asyncronously,
such as APi calls, file I/O, or timers. */

function callback (){
    console.log("Some time has passed.");
}
setTimeout(callback, 3000)

// Promisified version

function setTimeoutPromisified(ms){
    return new Promise(resole => setTimeout(resole,ms))
}

callback =>{
    console.log("3 second have passed.")
}

setTimeoutPromisified(3000).then(callback); //syntactically cleaner

// note --> Promise() = in the function first argument is callback function in Promice class.

// Create the prmisifide version of fs.readFile, fs.wirteFile, cleanfile

// const fs = require("fs");
// function readTheFile(sendTheFinalValueHere){
//     fs.readFile("a.txt","utf-8", function(err,data){
//         sendTheFinalValueHere(data);
//     })
// }

// function readFile(fileName){
//     return new Promise(readTheFile);
// }

// const p = readFile();

// function callback(contents){
//     console.log(contents);
// }
// p.then(callback)


const fs = require("fs");

readFile=(fileName)=>{
    return new Promise(readTheFile=(contents)=>{
    fs.readFile("a.txt","utf-8",(err,contents)=>{
        if(err){
            console.log("File not found");
        }else{
            console.log(contents)
        }
    })
});
}

readFile().then();