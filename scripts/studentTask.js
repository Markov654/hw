// store students data as array of arrays:
let students = [
    ["male",24,"Ivan","Ivanov"],
    ["female",22,"Maria","Petrova"],
    ["male",18,"Georgi","Georgiev"],
    ["male",21,"Nikolai","Nikolov"]
];


//////////////////// EXAMPLE ////////////////////
// print in console the youngest student names: /
/////////////////////////////////////////////////

// inititalize minAge with first student age:
let minAge = students[0][1];


// variable to store youngest student data:
let youngestStudent;

for (let i = 0; i < students.length; i++) {
    const studentAge = students[i][1];

    if( studentAge <= minAge){
        minAge = studentAge;
        youngestStudent = students[i];
    }
}

console.log(`The youngest student is ${youngestStudent[2]} ${youngestStudent[3]}. He is ${youngestStudent[1]} years old.`);

let maxYear = students[2][1];
let oldersStudent;

for(let j = 0; j<students.length; j++){
    let studentYears = students[j][1];

    if(studentYears >= maxYear){
    maxYear = studentYears;
    oldersStudent = students[j]
    }
   
}
console.log(`The oldest  student is ${oldersStudent[2]} ${oldersStudent[3]}. He is ${oldersStudent[1]} years old.`);


////////////////////  TASK  ////////////////////
// print in console the oldest student names:  /
////////////////////////////////////////////////
// your code goes here: