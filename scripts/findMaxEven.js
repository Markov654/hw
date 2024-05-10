// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

// TEST

let numbers = [2, -4, 5, 3, 9, 0, 1];
function findMaxEven(numbers){
     return(Math.max(...numbers))
}
let max = findMaxEven(numbers)
console.log(`The max of ${numbers} is ${max}`);
//console.log(max)