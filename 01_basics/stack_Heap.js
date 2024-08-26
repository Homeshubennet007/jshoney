//memories are of two types -

/*
stack = primitive datatypes , we get a copy of variable
heap = non-primitive, we get reference of the original value
 
 */

let myName = "homeshu"
let anotherName = myName
anotherName = "harshit"

console.log(myName);
console.log(anotherName);

let user = {
    email:"honey@g.com",
    upi : "user@bl",

}

let userTwo = user

userTwo.email = "baba@b.com"
console.log(user.email);
console.log(userTwo.email);


