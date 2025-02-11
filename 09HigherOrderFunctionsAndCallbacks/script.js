// Higher order functions and callbacks
// If a function takes another function as argument then it is called a higher order function
function addNums(num1, num2, displayResult) {
    let result = num1 + num2
    displayResult(result) // calling this function is called callback
}
// so addNums is a high order function because it is accepting a function as input

// passing a function as argument
addNums(11, 87, function (result) {
    console.log(result)
})
// arrow function
addNums(5, 6, (res) => console.log(res))


// a function can also return another function 
function returnSomeVal() {
    return () => "Hello I am returing from returnSomeVal function"
}

console.log(returnSomeVal()) // will print the function
let messageFunc = returnSomeVal()
console.log(messageFunc())   // will print the message