const name = "honey";
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("homeshu-b-com")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,4) //-value cannot be given here
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(newString);

const newStringOne = "  honey  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20ch0"

console.log(url.replace("%20",'-'));

console.log(url.includes("honey"));

console.log(gameName.split("-"));

