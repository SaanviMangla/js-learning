// Primitive
// 7 categories : String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIN = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)
const bigNumber = 23049745709348537447n

// Reference(Non- Primitive)
// Array, Objects, Functions
const heros = ["shaktiman", "haha", "meme", "pepe", "cheche"]
let myObj = {
    name: "saanvi",
    age: 20,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
// null ka typeof is object