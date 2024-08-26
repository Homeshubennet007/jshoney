let score = "33abc" ;

//let score = null ; //0
//let score = undefined ; //NaN
//let score = true ; //1 false 1
//let score = "abc" ;  // NaN 
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/*
    "33" => 33
    "33bac" => NaN
    true => 1; false => 0 

*/

let isLoggedIn = 1; //if empty string = false, if string = true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true; 0=> false
//"" => false
//"honey" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
