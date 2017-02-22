/**
 * Created by shubham16598 on 3/2/17.
 */
console.log("Hello");
var shubham = function () {
    console.log("Ting tong");
};

console.log(shubham());
setTimeout(shubham,6000);
var movies = require('./module.js');
movies.sh();