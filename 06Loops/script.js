// for loop
for (let i=0; i<5; i++) {
    console.log("Hello from for loop " + i)
}

// while loop
let num = 5
while (num < 10) {
    console.log("Hello from while loop " + num)
    num++
}

// do while
do {
    console.log("Hello form do while " + num)
    num--
} while (num > 5)


// activity
let guessNum = parseInt(prompt("Guess a number between 0 and 10"))

while (guessNum < 0 || guessNum > 10) {
    guessNum = parseInt(prompt("You will be asked to guess till you enter a number between 0 and 10"))
}
console.log("Thanks for guessing " + guessNum)