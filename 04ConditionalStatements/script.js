const age = 8

// if else 
if (age > 18) {
    console.log("Yes, you can vote")
} else if (age == 18) {
    console.log("Yay! you can vote from now on")
}
else {
    console.log("No, you can't vote")
}


// Ternary operator
let result = age >= 18 ? "yes" : "no"
console.log(result)


// switch statement
const option = "French"

switch(option) {
    case "English" : {
        console.log("Hello")
        break
    }

    case "Hindi" : {
        console.log("Namaskar")
        break
    }

    case "Telugu" : {
        console.log("Namaskaramu")
        break
    }

    default : {
        console.log("Invalid language")
    }
}