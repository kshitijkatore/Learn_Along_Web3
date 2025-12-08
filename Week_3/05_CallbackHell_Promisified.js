// Promisified version of callback hell

callbackHellPromisified = (ms)=>{
    return new Promise(resolve=>{
        setTimeout(resolve,ms);
    })
};


step3Done= ()=>{
    console.log("Hello there ...")
}
step2Done=()=>{
    console.log("Hi there ...");
    setTimeout(step3Done,5000);
}
step1Done =()=>{
    console.log("Hi ...");
    setTimeout(step2Done,3000);

}
callbackHellPromisified(1000).then(step1Done);


// promise chaining

promiseChaining= (ms)=>{
    return new Promise(resolve=>{
        setTimeout(resolve,ms);
    })
};


promiseChaining(1000).then(()=>{
    console.log("Hi ...");
    return promiseChaining(3000)
}).then(()=>{
    console.log("Hi there ...");
    return promiseChaining(5000)
}).then(()=>{
    console.log("Hello there ...");
});