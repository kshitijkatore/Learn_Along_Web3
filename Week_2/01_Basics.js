// Variables

let firstName = "Xitij";  // Variable that can be reassigned
const num = 30;  // Constant variable that can not be reassigned
var isStudent = true;

console.log(firstName)
console.log(num)
console.log(isStudent)

// Data types
let number = 42;  // Number
let string = "Hello World";  // String
let isActive = false;  // Boolean
let numbers = [1,2,3,4,5];  // arrays

// Operators
let sum = 43 + 343.43;
console.log(sum);

let age = 21;
let canVote = (age > 18);  // true, false
console.log(canVote)

// Functions 

function greet(name){
    return "Hello, " + name;
}
console.log(greet("Xitij"));

// If/else
function user(age){
    if (age >= 18){
    console.log("You are a adult");
    }
    else{
    console.log("You are a minor");
    }
}

// Loops

let users = ["Xitij", "Raman", "Diljeet"];
let totalUsers = users.length;

for (let i=0; i< totalUsers; i++){
    console.log(users[i])
}


