// Data types

// number
let num = 11
let num2 = 3.14
console.log(num + num2)

// string
let firstName = "Praneeth"
let lastName = 'Bonagiri'
console.log(firstName + " " + lastName)

// boolean
let isLoggedIn = true
if (isLoggedIn) {
    console.log("User is logged in")
}

let falseValue = false
if (!falseValue) {
    console.log("False value")
}

// null
// currently type is "any", hover over variable name to see type
let lastLoggedInDate = null

// object
const person = {
    firstName : "Praneeth",
    lastName : "Bonagiri",
    age : 25,
    isLoggedIn : true,
    lastLoggedInDate : null,
}
console.log(person)
// we can access individual properties also
console.log(person.firstName)


// Operators
console.log(5 + 10 + 25)
console.log(5 - 10 - 25)

// boolean values internally considered as numbers
// true --> 1, false --> 0
let trueVal = true
let falseVal = false
const constVal = 11

console.log(trueVal + constVal)  // Internally 1 + 11
console.log(falseVal + constVal) // Internally 0 + 11

// string + string = string
// string + number = string
// string * number = number
// string - string = number
// string - number = number
console.log("1" + "2") // 12
console.log("1" + 2)   // 12
console.log("1" * 2)   // 2
console.log("1" - "2") // -1
console.log("1" - 2)   // -1

// typeof function can be used to know the type of variables
console.log(typeof("1" + "2"))        // string
console.log(typeof("1" + 2))          // string
console.log(typeof("1" * 2))          // number
console.log(typeof("1" - "2"))        // number
console.log(typeof("1" - 2))          // number
console.log(typeof(person))           // object
console.log(typeof(person.firstName)) // string
console.log(typeof(person.age))       // number
console.log(typeof(isLoggedIn))       // boolean
