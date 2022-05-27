// comparison operators:
let a = 1;
let b = 2;
let c = "3";
let d = 1;
let e = "1";
let f = "1";

// Euqall (==) Operator compares only values
console.log(a==d)

// Euqall (===) check data types first then check values
console.log(a===e)
console.log(e===f)

// not equal (!=) it converts true to false and it only checks value
console.log(a!=b);
console.log(a!=d);

// not equal (!==) it converts true to false and it first checks data types and then check values
console.log(a!==d);
console.log(a!==c);

// Logical Operators:

// And Operator (&&) it show true when both conditions are true
console.log(5<10 && 6>1)
console.log(5<10 && 6<1)

// OR operators (||) it becomes true when any one condition is true among them and if both conditions are false it will become false 
console.log(5<10 || 6<1)
console.log(5>10 || 4<2)

// Not operator (!) it will convert true to false or fasle to true
console.log(!(5==5))
console.log(!(5==6))