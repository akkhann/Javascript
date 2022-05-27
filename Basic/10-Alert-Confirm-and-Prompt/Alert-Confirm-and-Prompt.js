//  Alert
// alert("hi ehsan")
//  prompt
// prompt("enter number")

let age = prompt("Enter your age",24)
if (age != null) {
    document.write(`Your age is ${age}`)
} else {
    document.write("You age is not defined")
}

// confirm
confirm(`You are confirm that age ${age} is correct`)