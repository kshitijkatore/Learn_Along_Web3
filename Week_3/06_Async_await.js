// The async and await syntax in javascript provides a to write asyncronous code that looks and behave like syncronous code, making it easier to read and maintain.
// it builds on top of promises and allows you to avoid chaining .then() and catch() methods while still working with asyncronus operation. async/await is essentially sugar on top of promises.


asyncAwaitPromisifies=(ms)=>{
    return new Promise(resolve => setTimeout(resolve,ms));
}


async function solve(){
    await asyncAwaitPromisifies(100);
    console.log("Hi ....");
    await asyncAwaitPromisifies(3000);
    console.log("Hi there ...");
    await asyncAwaitPromisifies(5000);
    console.log("Hello there ...");
}

solve();