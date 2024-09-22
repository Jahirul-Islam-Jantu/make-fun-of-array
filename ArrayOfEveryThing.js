// Array Of Object
const favouriteChannels = [
    {name: "Stack Learner", url: "https://stacklearner.com"},
    {name: "Easy Learner", url: "https://easy-learner.com"},
    {name: "Hard Learner", url: "https://hard-learner.com"},
    {name: "Medium Learner", url: "https://medium-learner.com"},
]

// console.log(favouriteChannels)

// Array of Function
const sum = (a,b)=> a + b
const sub = (a, b) => a - b
const multiply = (a,b) => a * b
const divide = (a,b) => a / b
const modulo = (a,b) => a % b

const funcs = [sum, sub, multiply, divide, modulo, modulo]
const a = 15
const b = 10
for (let i = 0; i < funcs.length; i++) {
     const result =  funcs[i] (a, b)

console.log(result)
console.log(`${funcs[i].name} result is ${result}`)
}
