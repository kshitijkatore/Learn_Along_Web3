setTimeout(()=>{
    console.log("Hi...");
    setTimeout(()=>{
        console.log("Hi there ...");
        setTimeout(()=>{
            console.log("Hello there ...")
        },5000);
    },3000);
},1000);


// Alternate solution
step3Done= ()=>{
    console.log("Hello there ...");
};

step2Done= ()=>{
    console.log("Hi there ...");
    setTimeout(step3Done,5000);
};

stepOneDone= ()=>{
    console.log("Hi ...");
    setTimeout(step2Done,3000);
};

setTimeout(stepOneDone,1000);
