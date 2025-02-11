// Arrays 
const courses = ["Java", "Python", "Golang", "Java Script"]

for (let i=0; i<courses.length; i++) {
    console.log(courses[i])
}

courses.push("C++")
console.log(courses)
courses.pop()
console.log(courses)
courses[1] = "Rust"
console.log(courses)

console.log(courses.indexOf("Java Script"))
console.log(courses.indexOf("random string")) // returns -1

// reversing an array
courses.reverse()
console.log(courses)

// for each
courses.forEach((course) => console.log(course))

// we can have heterogenous arrays
const myArr = [11, 19.99, "Praneeth", true]
console.log(myArr)


// lets say we need squares of these in another array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// using for each
// for each is used to loop over the array and perform some tasks nothing is returned
const forEachNumsArr = []
nums.forEach(num => forEachNumsArr.push(num * num))
console.log(forEachNumsArr)

// using map
// map loops over the original array and returns new array
let mapNumsArr = nums.map(num => num * num)
console.log(mapNumsArr)

// even numbers
let evenNumsArr = nums.filter(num => num%2 == 0)
console.log(evenNumsArr)

// sub array or slice
let subArr = nums.slice(2, 6)
console.log(subArr)
console.log(nums.slice(8))

// splice
// delete sub array from original array and return that deleted sub array
// start from index 2 and delete next 5 elements (imp we will delete from start index + 1 )
console.log(nums.splice(2, 5))
console.log(nums)
