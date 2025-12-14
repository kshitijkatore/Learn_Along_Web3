const express = require('express');
const app = express()
const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKedneys = johnKidneys.length;
    // filter
    let numberOfHelthyKidneys = 0;
    for (let i =0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHelthyKidneys = numberOfHelthyKidneys + 1;
        }
    }

    const numberOfUnhelthyKidneys = numberOfKedneys - numberOfHelthyKidneys;

    res.json({
        numberOfKedneys,
        numberOfHelthyKidneys,
        numberOfUnhelthyKidneys
    })

})

app.listen(3000);

