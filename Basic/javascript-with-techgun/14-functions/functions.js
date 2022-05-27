// functios


function Table() {
    for (let i = 1; i <= 10; i++){
        document.write(`3 x ${i} = ${3*i}`);
        document.write("<br>")
    }    
}
Table();

document.write("<br>")
document.write("<br>")
document.write("<br>")
Table();
document.write("<br>")

// parameters is inside the () ex: function Table(num)  where "num" is parameter
// argument is the value of parameter we call the function like : Table(2) where "2" is arguments
// single parameter
function customtable(number) {
    for (let a = 1; a <= 20; a++ ) {
        document.write(`${number} x ${a} = ${number * a} <br>`);
    }
}
customtable(2)
document.write("<br>")
document.write("<br>")

// double parameters
function addition(num1,num2) {
    document.write(`${num1} + ${num2} = ${num1 + num2}`)
}
addition(5,40)
document.write("<br>")
document.write("<br>")

// pass function without parameters through argument array
function addnumber(){
    if (arguments.length == 0) {
        document.write("Please Enter the value")
    } else {
        let sum = 0;
        for(let b = 0; b <arguments.length; b++){
            sum = sum + arguments[b]
        }
        document.write(sum)
    }
}
addnumber(1,4,5);
document.write("<br>")
document.write("<br>")


// return in function
function addnum(a,b) {
    let ad = a + b;
    return ad;
}
let varad = addnum(5,7);
document.write(varad)



// Global and Local Variable

// Global variables are those which are declared outside the function and can be used in both inside and outside the function 
// Local variables are those which are declared inside the function and local variable will only be local within particular function not be declared outside the function and we can use same name of varaible in different function



// Anonymous Functions
//  we can stored anonymous functions in variable and it will become function expression
// we use anonymous functions to not stored space in ram or execute only once
// we can pass anonymous functions in parameter of others function

let set = function () {
    console.log("abc")
}

setTimeout(set,3000)
// both are same
setTimeout(function () {
    console.log("def")
},8000)


// Immediately Invoked Function
// Immediately Invoked Function is used when we want to execute immediately
// (function (){
//     console.log("hi ahsan")
//     })();