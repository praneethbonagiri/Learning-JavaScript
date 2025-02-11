// Java script is a loosely typed language
// so we dont need to mention the data type of variable 

// There are 3 ways to create variables using var, let, const

// var -> scope is throughout the function if declared inside a function
//        or throughout the program/ file if declared outside a function
var myVar = 25
console.log(myVar)

// we can reassign any value
myVar = "Praneeth"
console.log(myVar)

// we can access it before declaring 
// but till assignment happens the value will be undefined
console.log(myNewVal)
var myNewVal = "new value"
console.log(myNewVal)

// not mandatory to initialize, it will be assigned undefined value
var unInitializedVal
console.log(unInitializedVal)

// --------------------------------------------------------------
// let -> block scoped, if declared inside a function can only be accessed inside function
//        if declared inside a block/loop/if statement accessed only inside it
let myLet = 10
console.log(myLet)

// we can reassign values
myLet = "example string"
console.log(myLet)

// ERROR
// we cannot access it before declaring
// console.log(myNewLet)
// let myNewLet = 100

// not mandatory to initialize, it will be assigned undefined value
let unInitializedLet
console.log(unInitializedLet)

// --------------------------------------------------------------
// const -> constant value, cannot be reassigned and local scope 
//          within functions or blocks
const learning = "JavaScript"
console.log(learning)

// ERROR
// we cannot reassign any value
// learning = "NodeJS"
// console.log(learning)

// ERROR
// we cannot leave it uninitialized we need to assign values compulasry
// const myDate
// console.log(myDate)