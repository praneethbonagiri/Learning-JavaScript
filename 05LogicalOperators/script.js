// Logical operators
const age = 25
const gender = "male"

// logical and
if (age >= 18 && gender == 'male') {
    console.log("You are an adult male")
}

// logical or
if (age >=18 || gender == 'male') {
    console.log("You are an adult")
}

// logical not
if (!(age % 2 == 0)) {
    console.log("age is Odd")
}