// Constructor Pattern
// Constructor pattern is a way to declare array as like declare a object with constructor same way.
// we can declare an array with constructor pattern with new keyword. let's see the example


const arr = Array(5)/* this is the way to declare an array with constructor, we need a variable to store this new array. */
arr.push(["Jahir", "John", "Jan"])
arr[0] = "Jahir"
arr[1] = "Jan"
arr[2] = "Feb"
console.log(arr)

// Factory Pattern

const arr2 = Array()
console.log(arr2, arr2.length)

const arr3 = Array(5)
console.log(arr3, arr3.length)

const arr4 = Array(5)
arr4.push([1, 2, 3])
arr4[0] = "Jan"
arr4[1] = "Feb"
arr4[2] = "Mar"
console.log(arr4)