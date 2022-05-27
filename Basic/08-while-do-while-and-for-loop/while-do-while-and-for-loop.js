
// while loop will not execute if condition not true
let counter = 1;
document.write("While loop <br>")
document.write("<br>")
while (counter < 10) {
    document.write("Number 1 to 10 <br>");
    document.write("<br>");
    counter++;   
}

let number = 1;
let sum = 0;
// this will calculate and plus all the even numbers
while (number <= 1000) {
    if (number % 2 == 0) {
        sum = sum + number;
    }
    number++;
}
document.write(sum)
document.write("<br>")
document.write("<br>")

// Do while loop will execute one time if condition not true
let counter1 = 10;
document.write("Do While loop <br>")
document.write("<br>")
do {
    document.write("Number 10 to 20 <br>");
    document.write("<br>");
    counter1++;   
}while (counter1 < 20)

// in first time for loop execute variable then condition and ignore (counter++)
// after first time for loop ignore variable and start execute from reverse order 
// For loop is written in one line
document.write("For loop <br>")
document.write("<br>")

for ( let counter2 = 20; counter2 < 25; counter2++) {
    document.write("Number 20 to 25 <br>");
    document.write("<br>");   
}