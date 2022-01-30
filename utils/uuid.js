// generate and export a random number and latter as an id 
module.exports =() =>
Math.floor((1 + Math.random()) * 0x10000)
.toString(16)
.substring(1);