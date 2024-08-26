// #primitive data type
//String,Number,Boolean,null,undefined,bigInt,symbol

//non-primitive or reference types
//array, objects,functions

//Q.is js dynamically typed or statically typed

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;
let userEm = undefined;

const id = Symbol('123')
const anotherID = Symbol('123')

//console.log(id === anotherID);

//const bigNumber  = 123444387489329832

//const biggNumber = 1234788497329823823n

const heros = ["shaktimaan", "naagraj", "doga"]

let obj = {
    name:"honey",
    age:26,
    city:"Raipur"
};

const myFunction = function () {
    console.log("hello world");
    
}

console.log(typeof outSideTemp);


//function datatype = function object