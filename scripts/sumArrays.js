// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE
let small = [1, 2, 3];
let big = [4, 5, 6];
let total = [];
console.log(total)
console.log(small)
function sumArray(small, big){
for(i=0; i<small.length; i++){
    for(j=0; j<big.length; j++){
        total.push(small[i] +big[j]) 
        //console.log(total)
    }
}
     console.log(total)   

       
        
    }





sumArray(small , big)

// TEST:
//console.log(small[0] + big[0]);
// OUTPUT:
// [ 5, 7, 9 ]
