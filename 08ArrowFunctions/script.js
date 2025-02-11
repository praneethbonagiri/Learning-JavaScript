// Arrow functions

const addNums = (num1, num2) => {
    return num1 + num2
}

console.log(addNums(101, 65))

// for one line functions
const addTen = (value) => value + 10 
console.log(addTen(32))

// arguments array is not available for arrow functions
const anySum = (...nums) => {
    // ERROR
    // console.log(arguments)
    console.log(nums)
    return 0
}

anySum(10,11,16,78,63)


// Hoisting
// for normal functions we can first call them then later below define them there is no error
// but its not possible for arrow functions we need to first define then only can call them
callNormalFunc()
// ERROR
//callArrowFunc()

function callNormalFunc() {
    console.log("Normal function")
}

callArrowFunc = () => console.log("Arrow function")



// This keyword
// for normal functions this will reference to the caller
const normalFuncObj = {
    value : 11,
    myFunction : function (){
        console.log("this keyword in normalFuncObj is referencing " + this)
        console.log("From normalFuncObj value is " + this.value)
    },
}
normalFuncObj.myFunction()

// in arrow function this will reference the window (browser window) 
// because the scope of arrow functions is global
const arrowFuncObj = {
    value : 11,
    myFunction : () => {
        console.log("this keyword in arrow func is referencing " + this)
        console.log("From arrowFuncObj value is " + this.value) // undefined
    },
}
arrowFuncObj.myFunction()