// CommonJS modules - require("path")  |  module.exports 

// ES modules -  import var from "path" |  export default value;

const colors = require("colors");
const cows = require("cows");

const favoriteCow = require("./favorite-cow.js");

console.log('favoriteCow', favoriteCow)

const cowsArr = cows();

// console.log('cows', cowsArr[5])
// console.log(colors.rainbow(cowsArr[5]));