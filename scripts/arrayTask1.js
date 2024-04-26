// Example - sum all numbers in the interval [1..10]:
var sum = 0;
for ( var x = 1; x <= 10 ; x++ ){
	sum += x ;
   // console.log(sum)
};
//console.log("sum = " + sum);

// TASK: given the array numbers, write the code which will print in console the sum of all positive  even numbers in the array:
let numbers = [-2, 3, 7, 8, -1, 4, 2];
let arr = []
var sum = 0

for(i=0;i<numbers.length; i++){
    let num = numbers[i] 
    //console.log(num)
    if(num>0 && num % 2 == 0){
      sum +=num
}
}

console.log(sum)
    
    


// >>>>>>>>> write your code bellow:


// expected output: 14