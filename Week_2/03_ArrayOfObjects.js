// Create a function that takes an arraya of objects as inpu, 
// and return the users whose age > 18 and are male
function solve(arr){
    arr2 = [];
    for (let i=0; i< arr.length; i++){
        if(arr[i].gender === "Male" && arr[i].age > 18){
            arr2.push(arr[i])
        }
    }
    return arr2;

}


const users = [{
    name: "Xitij",
    age:21,
    gender: "Male"
},{
    name: "Priya",
    age:20,
    gender:"Female"
},{
    name: "raman",
    age:12,
    gender:"Male"
}]

let ans =solve(users);
console.log(ans);