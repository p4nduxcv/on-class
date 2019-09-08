const express = require("express");
const router = express.Router(); //creating routing in different file
const Bear = require("../models/bear");

// let BearArray = [
//     { id: 1, name: "01 BEAR" },
//     { id: 2, name: "02 BEAR" },
//     { id: 3, name: "03 BEAR" }
// ]

//Get all Operations
router.get('/', async (req, res) => {
    // var bears = ["1 bear", "2 bear", "3 bear", "4 bear"];
    try {
        let bears = await Bear.find().sort({ name: "asc" });
        res.send(BearArray);
    } catch (ex) {
        return res.status(500).send("Error ", ex.message);
    }

});

//Get specific one
/*app.get("/api/bears/1", (req, res) => {
    var bear = { name: "1 bear", type: "type 1" }
    res.send(bear);
});*/

//Get with parameters read
router.get('/:bearId', (req, res) => {
    var userGivenBearId = req.params.bearId //request parameters*/
    // var queryParams= req.query.filterBy; //Query parameters*/
    let bearFromArray = BearArray.find(b => b.id === parseInt(userGivenBearId)); //loop is going hear find();
    if (!bearFromArray) {
        return res.status(404).send("Given bear id is not defined!");
    }
    res.send(bearFromArray);
});


//POST Method  create
router.post('/', async (req, res) => {
    if (!req.body.name) {
        return res.status(400).send("Not all mondatory values are set");
    }
    try {
        let bear = new Bear({
            name: req.body.name,
            type: req.body.type
        });
        bear = await bear.save();
        res.send(bear);
    } catch (ex) {
        return res.status(500).send("Error ", ex.message);

    }

    // let addNewArrayObject = {
    //     id: BearArray.length + 1,
    //     name: req.body.name
    // };
    // BearArray.push(addNewArrayObject);
    // res.send(addNewArrayObject);
    //save bear to existing bearArray
    //res.send("Saved bear to array");
    //let bearName = req.body.name;
    //console.log(bearName);
});

//PUT Method update
router.put('/:bearId', (req, res) => {
    let userGivenBearId = req.params.bearId; // find bear id from the request params
    let bearFromArray = BearArray.find(b => b.id === parseInt(userGivenBearId));// search array to find object with the given bear id
    if (!bearFromArray) {
        return res.status(404).send("The given id is not available");
    }
    if (!req.body.name) {
        return res.status(404).send("Values are not send in the request body");
    }
    bearFromArray.name = req.body.name;
    res.send(bearFromArray);
    // modify that object
    // send the modified bear object to the client
    // try to send a 404 error for bear id which doesnt exist and a 400 error if request
    // does not contain required values 
});

//DELETE Method delete
router.delete('/:bearId', (req, res) => {
    let userGivenBearId = req.params.bearId;
    let bearFromArray = BearArray.find(b => b.id === parseInt(userGivenBearId));
    if (!bearFromArray) {
        res.status(404).send("Id does not exists");
    }
    let indexOfBear = BearArray.indexOf(bearFromArray);
    BearArray.splice(indexOfBear, 1);
    res.send("Bear deleted");
});

module.exports = router;