// Hoisting means that we can call fun or var before decleration
// Javascript moves all decaleration to the top before ecxceute the code

name1()
function name1() {
    console.log("Ehsan")
}

// it will give undefined because we call before given the value
let a;
console.log(a)
a = 5;

// in this cas (var) can be create variable (decleration) after assignment 
a1 = 5;
console.log(a1)
var a1;

// in this cas (let) and (const) can't create variable (decleration) after assignment otherwise it will give error
// a2 = 15;
// console.log(a2)
// let a2;

// in javascript we can assigned the value without declaeration and decleration will be done by javascript
b = 3;
console.log(b)

// in javascript we can assigned the value without declaeration and decleration will be done by javascript but in "use strict" mode it will not worked and it will stricked to it
b1 = 3;
console.log(b1)