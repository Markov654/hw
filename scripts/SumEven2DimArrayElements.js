// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---

// TEST:
let arr = [
	[1,2,3],
	[4,5,6]
];

let oddArr = 0;
function SumEven2DimArrayElements(arr){

for(i=0; i<=arr.length; i++){
    
    if(arr[0][i] % 2 === 0 ){
        oddArr += arr[0][i]
    }
     if(arr[1][i] % 2 === 0){
        oddArr += arr[1][i]
       
 
    }
    
}
console.log(oddArr)
}
 SumEven2DimArrayElements(arr);


//let sum = SumEven2DimArrayElements(arr);
//console.log(sum);

// expected output: 12
