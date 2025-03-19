// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 789456123789456123n



// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "Shibayan",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotheId);