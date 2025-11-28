// Also the user if they are legel to vote
function canVote(user){
    if (user.age >=18){
        console.log("Hey " + user.name + " You can Vote now.");
    }
    else{
        console.log("Hey " + user.name + "You are not eligible for vot")
    }
};

let user ={
    name:"Xitij",
    age: 21
};

canVote(user);