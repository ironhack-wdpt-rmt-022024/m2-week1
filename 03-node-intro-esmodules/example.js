// const colors = require('colors');
import colors from 'colors';

// const greetings = require("./greetings.js");
import greetings from './greetings.js';

console.log( colors.rainbow(greetings.en) );
console.log( colors.rainbow(greetings.es) );
console.log( colors.rainbow(greetings.de) );


/* 
CommonJS Modules:
- require()
- module.exports = value;

-------------------------
ES Modules
- import * from "package-name"
- import * from "./url.ext"

- export default value
*/

