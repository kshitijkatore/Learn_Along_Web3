// Write a functions takes a user as an input and greets them with their name & age

function greet(user){
    console.log("Hey, "+user.name +" your age is "+ user.age)
};

let user = {
    name: "Xitij",
    age: 21,
};

greet(user);
