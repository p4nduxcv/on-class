//Promises - pending - fullfill - rejected

let p = new Promises ((resolve,reject) => {
    setTimeout(() => {
        //Operation
        resolve("Success! Operation is completed");
    },2000);
});

p.then((result) => {
    console.log(result);
});

console.log(`Success Message ${p}`);