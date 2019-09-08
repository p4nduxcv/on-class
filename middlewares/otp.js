function otp (req, res, next){
    console.log("sending otp ...");
    next();  
}

module.exports = otp;