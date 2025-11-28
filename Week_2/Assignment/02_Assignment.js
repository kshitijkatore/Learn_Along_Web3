function canVote(age){
    if (age >18){
        return true;
    }
    else{
        return false;
    }
}

let ans = canVote(20);
console.log(ans);