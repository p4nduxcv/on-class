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

//Get with parameters read
router.get('/:bearId', (req, res) => {
    var userGivenBearId = req.params.bearId 
   
    let bearFromArray = BearArray.find(b => b.id === parseInt(userGivenBearId)); 
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
        //create object from model
        let bear = new Bear({
            name: req.body.name,
            type: req.body.type
        });
        bear = await bear.save();
        res.send(bear);
    } catch (ex) {
        return res.status(500).send(ex);

    }
});

//PUT Method update
router.put('/:bearId', async (req, res) => {
    if (!req.body.name) {
        return res
            .status(400)
            .send("Mandotary values are not ncluded in requested body")
    }
    try {
        let bear = await Bear.findById(req.params.bearId);
        let bear = new Bear({
            name: req.body.name,
        });
        bear = await bear.save();
        res.send(bear);
    }
    catch (ex) {
        return res.status(500).send(ex);
    }
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