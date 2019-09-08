const mongoose = require("mongoose");

// create schema
let bearSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    type: String,
    characteristics: {
        type: String,
        enum: ["Angry", "Sad", "Happy", "Sweet", "Cuddle"]
    },
    lastSpotted: {
        type: Date,
        default: Date.now
    },
    population: Number,
    isExtinct: Boolean
});

//Create Model
const Bear = mongoose.model("Bear", bearSchema);

//Export Module
module.exports = Bear;