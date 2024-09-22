// Array Travarsing
/**
 * Array travarsing is like attendance sheet of a school, we have a student's attendance sheet and we call everyones id everytime. this is array travarsing. travarse on every single item of an array.
 * */
/*
// simple travers
    const arr1 = [1, 2, 3, 4, 5];
     for (let i = 0; i < arr1.length; i++) {
         console.log(arr1[i]);
     }
 */
/*

// simple array travarse with sum every item
const arr = [1, 2, 3, 4, 5, 6];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    count += arr[i];
    console.log(count, "Count");
}
 */
/*
// sum and average of an array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i]
}
console.log(sum, "sum")
console.log(sum/ array.length)
 */

// find large number from an array

const numbers = [165413,65416,3163,10654,2175,4893,8415651, 1564]
let largestNumber = numbers[0]
for(let number of numbers){
    if(number> largestNumber){
        largestNumber = number
    }
}
console.log(largestNumber)

// find minimum numbers from an array
const arrayOfNumbers = [5421,496416,1564121,3163,15641,32152,451,2163,1651,21,310,51,560,321,6541,616,8]
let minNumber = arrayOfNumbers[0]
for(let n of arrayOfNumbers){
    if (n < minNumber){
        minNumber = n
    }
}
console.log(minNumber)