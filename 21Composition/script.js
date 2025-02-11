// Composition
// lets say we have a function to add 2 numbers
function add(a, b) {
    return a + b
}

// another function which returns square of given number
function square(num) {
    return num * num
}

// now our requirement is that we need to use the both functions
// one after another , first we need to add the square the result
const result1 = add(2, 3)
const result2 = square(result1)
console.log(result2)

// so if we have so many functions it will be difficult
// so we will compose those 2 functions and create a new function
function composeTwoFunctions(fn1, fn2) {
    return function (a, b) {
        return fn2(fn1(a, b))
    }
}

const task = composeTwoFunctions(add, square)
console.log(task(2, 3))

// lets see some more code
function multiply(a, b) {
    return a * b
}

// to write the compose function in modern java script code
const compseTwoFunc = (fn1, fn2) => (a, b) => fn2(fn1(a, b))

const task2 = compseTwoFunc(multiply, square)
console.log(task2(2, 3))