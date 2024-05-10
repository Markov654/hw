let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
function getHighestScoreIndex(students, scores){
   for(i= 0; i < students.lenght; i++){
      console.log(students[i])
   }
  console.log( `  ${students[2] } has the higest ${Math.max(...scores)}`)
}

getHighestScoreIndex(students, scores)

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

// expected output
// Maria has the higest score: 6