const dc_heros = ["batman","flash","superman"]

const marvel_heros = ["ironman","thor","blackwidow"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const md = marvel_heros.concat(dc_heros)
// console.log(md);


const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);


const another_arr = [1,2,3,[4,5,6],7,[6,7,[9,0]]]

const realNum = another_arr.flat(Infinity)
console.log(realNum);


console.log(Array.isArray("Honey"));
console.log(Array.from("Honey"));
console.log(Array.from({name:"honey"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






