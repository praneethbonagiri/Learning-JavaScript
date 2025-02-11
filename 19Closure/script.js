// Closures
// A function enclosed within another function and the inner function accessing
// the out function's variables is called a closure

function init(name) {
    
    function displayName() {
        console.log(name)
    }

    displayName()
}

init("Hello")

// example 2

function mainTest() {
    var name = "Praneeth"

    function sayMyName() {
        console.log(name)
    }

    sayMyName()
}
mainTest()

// example some practical usages
function main(name) {
    
    function sayMyName() {
        console.log(name)
    }

    return sayMyName
}
let consoleName = main("new name")
console.log(consoleName) // it is a function
consoleName()


// another example
function adder(num) {
    function add(num2) {
        console.log(num + num2)
    }

    return add
}

let addTo5 = adder(5)
addTo5(10)
addTo5(6)

let addTo10 = adder(10)
addTo10(7)
addTo10(3)
// it works as a utility function


// using closures to do dom manipulation
// in this case only to change the font size
const myName = document.getElementById('my-name')

function changeTextSizer(size) {
    function changeSize() {
        myName.style.fontSize = `${size}px`
    }

    return changeSize
}

const size10 = changeTextSizer(10)
const size100 = changeTextSizer(100)
const size30 = changeTextSizer(30)
const size1 = changeTextSizer(1)

const button10 = document.getElementById("button-10")
const button100 = document.getElementById("button-100")
const button30 = document.getElementById("button-30")
const button1 = document.getElementById("button-1")

button1.addEventListener("click", () => {
    size1()
})
button10.addEventListener("click", () => {
    size10()
})
button30.addEventListener("click", () => {
    size30()
})
button100.addEventListener("click", () => {
    size100()
})

// So we added interactivity to out website by using this closures 
// to perform similar tasks but actually slightlt different from each other