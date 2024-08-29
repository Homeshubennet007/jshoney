//objects can be declared as literals or constructor or even singleton(kind of a individual object)

//literals = no singleton
//constructor = singleton


//object literals
//Object.create //constructor method

const mySym = Symbol("key1")

const jsUser = {
    name:"Hitesh",
    "fullname" : "honey h bennett",
    [mySym] : "key1",
    age:25,
    location:"raipur",
    email:"baba@b.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

//console.log(jsUser.email); //one way to access

//console.log(jsUser["email"]); //another way to access
//console.log(jsUser["fullname"]);
//console.log(jsUser[mySym]);


jsUser.email = "honey@bb.com"
//Object.freeze(jsUser)
jsUser.age = 28
//console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello user");
}
jsUser.greetingTwo = function() {
    console.log(`hello user, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo());







