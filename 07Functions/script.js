// functions

function sayHello() {
    console.log("Hello")
}


// functions with arguments
function addNums(num1, num2, num3) {
    console.log(num1 + num2 + num3)
}


// function returning some value
function multiplyNums(num1, num2) {
    return num1 * num2
}

let ans = multiplyNums(11, 10)
console.log("The result is", ans)


// function which takes multiple arguments
function addManyNums() {
    console.log(arguments)
    
    let sumRes = 0
    for (let i=0; i<arguments.length; i++) {
        sumRes = sumRes + arguments[i]
    }
    
    console.log("The sum from addManyNums is", sumRes)
}

// spread operator
function addManyNums2(...numbers) {
    let ans = 0
    
    for (let i=0; i<numbers.length; i++) {
        ans = ans + numbers[i]
    }
    
    console.log("The sum from addManyNums2 is", ans)
}

sayHello()
// calling the function with parameters
addNums(11, 99, 10)
addManyNums(19, 209, 32, 14, 55)
addManyNums(19, 27, 32, 14, 5, 43)