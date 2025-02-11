/**
 * Currying is a functional programmin technique where we transform
 * a function with multiple arguments into a series of functions
 * each taking a input
 */

// requirement to add 3 numbers
function testAdd(a, b, c) {
    return a + b + c
}

console.log(testAdd(3, 4, 5))
/**
 * This will only work only if all 3 parameters will be present when we call
 * the function, lets suppose that we get those values from separate api's
 * and we don't want to proceed until we have all 3 values
 * 
 * Some logic's like checking each variable individually is not scallable
 * So we can modify that function as below
 */

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(add(1)(4)(6))


// example
function sendAutoEmail(toAddr) {
    return function (subject) {
        return function (body) {
            console.log(`Sending email to ${toAddr} with subject ${subject} : ${body}`)
        }
    }
}

let step1 = sendAutoEmail("praneeth.dev@mail.com")
let step2 = step1("Order confirmation")
step2("Hey thanks for you order, below is the order summary and shipping details")