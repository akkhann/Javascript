// Jvascript code

// Data Types:
// we use ( typeof() ) to check type of data type


// String Data Types:
// String can be denote with single or double quote
let a = "abc"
a = 'abs'
console.log(a)
console.log(typeof(a))

// if you want single quote in variable denote string in double quote
let b = "Ehsan's"
console.log(b)
console.log(typeof(b))

// if you want double quote in variable denote string in single quote
let c = 'Ehsan"s'
console.log(c)
console.log(typeof(c))

// if you want double and single quote in variable denote use (\) before that quote
let d = 'Ehsan"s Ali\'s khan'
console.log(d)
console.log(typeof(d))

// Number Data Type:
let num1 = 1, num2 = 2.5, num3 = num1+num2;
console.log(num3)
console.log(typeof(num3))

// Boolean Data Types mainly use in conditions:
let e  = 12>2;
let f  = 12<2;
console.log(e);
console.log(f);
console.log(typeof(e))

// Array Data Types:
let array1 = ["Ehsan","Ali","Khan"]
console.log(typeof(array1))

// Object Data Types:
let object1 = {age:12, name1:"Ehsan"}
console.log(typeof(array1))

// Undefined Data Types:
let undefined1;
console.log(undefined1)
console.log(typeof(undefined1))

// Null Data Types:
let g = null;
console.log(g);
console.log(typeof(g))

// template (`):
let myname = "Ehsan"
let myage = 22
let combined = `Hi I'm ${myname} and my age is ${myage}`
console.log(combined)