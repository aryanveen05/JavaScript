//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "aryan",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++
// Stack (Primitive), Heap(Non-Primitive)

// let myName="Aryan"
// let anotherName=myName
// anotherName="Gautam"
// console.log(myName);
// console.log(anotherName);

let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}

userTwo=userOne

userTwo.email="aryan@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)