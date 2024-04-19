 let btn = document.getElementById("btn").addEventListener('click' ,Calculate );

function Calculate() {
    let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;


let result = document.getElementById("result");

let bmi = (weight / (height * height / 10000))

if(bmi< 20){
    result.innerText = `You are a tin${bmi.toFixed(2)}`
}

if(bmi> 27){
    result.innerText = `You are a fat${bmi.toFixed(2)}`
}

if(bmi>20 && bmi < 27){
    result.innerHTML = `Good you are a fit${bmi.toFixed(2)}`
}

}


    









