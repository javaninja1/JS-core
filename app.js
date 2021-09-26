const _ = require('underscore');
const ln = () => {console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");}
const cl = (str) => {console.log(str);}

console.log(":Node js - feature catalog:");
ln();

//IIFE - immediately invoked functional expressions
( () => {
    console.log("IIFE here");
})();
ln();

//Closure - inner function with access to outer func scope
var count = (() => {
    var _count = 0;
    return () =>{ return _count += 1; }
})();
cl("closure:" + count());
cl("closure:" + count());
ln();

//Prototypes - set values for all instances' properties or create new props
function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}
Person.prototype.age = 15;
Person.prototype.fullName = function() { return this.firstName + ' ' + this.lastName};
var p1 = new Person();
console.log(p1.firstName + ":" + p1.fullName());
ln();

//hoisting
color = "green";
console.log(color);
var color = "red";





