/*
// Fill array manually (Update array)
const arr1 = new Array(10);
for(let i = 0; i < arr1.length; i++){
    arr1[i] = "Filled Manually";
}
console.log(arr1);
 */
/*
// Fill array with method

const arr2 = new Array(10);
arr2.fill(2, 0, 5);
arr2.fill(5, 5, 10);
console.log(arr2)
 */
/*
// tictac toe with random number and fill
const arr3 = Array(9)
arr3.fill(false)
for (let i = 0; i < arr3.length; i++) {
    const random = Math.floor(Math.random() * 10 +1 )
    arr3[i] = random > 5 ? "X" : "O"
}
console.log(arr3)
 */

/*
// array is mutable
const names = ['A', 'B', 'C', 'D', 'E', 'F'];
function update(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `${i + 1}. ${arr[i]}`;
    }
    return arr;
}
const updatedResult = update(names)
console.log(names)
console.log(updatedResult)
 */