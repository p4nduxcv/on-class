const express = require("express");
const authenticator = require('./middlewares/authenticator');
const otp = require('./middlewares/otp');
const bears = require("./routes/bears");
const home = require("./routes/home");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

mongoose
    .connect("mongodb://localhost/beardb", { useNewUrlParser: true })
    .then(() => console.log("Connection to dbs..."))
    .catch(err => console.error("Something went wrong", err));

app.use(express.json()); //body parser , read JSON 

app.use("/api/bears", bears); // if /api/bears is called use bears file
app.use("/", home);

app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`);
});

//Middleware usage-: SMS gateways otp pins and etc
// app.use(authenticator);
// app.use(otp);

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

//Get specific one
/*app.get("/api/bears/1", (req, res) => {
    var bear = { name: "1 bear", type: "type 1" }
    res.send(bear);
});*/

//Get with parameters read
// app.get('/api/bears/:bearId', (req, res) => {
//     var userGivenBearId = req.params.bearId //request parameters*/
//     // var queryParams= req.query.filterBy; //Query parameters*/
//     let bearFromArray = BearArray.find(b => b.id === parseInt(userGivenBearId)); //loop is going hear find();
//     if (!bearFromArray) {
//         return res.status(404).send("Given bear id is not defined!");
//     }
//     res.send(express.json());
// });


//POST Method  create
// app.post('/api/bears', (req, res) => {
//     //save bear to existing bearArray
//     //res.send("Saved bear to array");
//     //let bearName = req.body.name;
//     //console.log(bearName);
//     let addNewArrayObject = {
//         id: BearArray.length + 1,
//         name: req.body.name
//     };
//     BearArray.push(addNewArrayObject);
//     res.send(addNewArrayObject);
// });

//PUT Method update
// app.put('/api/bears/:bearId', (req, res) => {
//     let userGivenBearId = req.params.bearId; // find bear id from the request params
//     let bearFromArray = BearArray.find(b => b.id === parseInt(userGivenBearId));// search array to find object with the given bear id
//     if (!bearFromArray) {
//         return res.status(404).send("The given id is not available");
//     }
//     if (!req.body.name) {
//         return res.status(404).send("Values are not send in the request body");
//     }
//     bearFromArray.name = req.body.name;
//     res.send(bearFromArray);
//     // modify that object
//     // send the modified bear object to the client
//     // try to send a 404 error for bear id which doesnt exist and a 400 error if request
//     // does not contain required values 
// });

//DELETE Method delete
// app.delete('/api/bears/:bearId', (req, res) => {
//     let userGivenBearId = req.params.bearId;
//     let bearFromArray = BearArray.find(b => b.id === parseInt(userGivenBearId));
//     if (!bearFromArray) {
//         res.status(404).send("Id does not exists");
//     }
//     let indexOfBear = BearArray.indexOf(bearFromArray);
//     BearArray.splice(indexOfBear, 1);
//     res.send("Bear deleted");
// });

