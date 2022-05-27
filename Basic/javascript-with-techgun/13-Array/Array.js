// Array

let Book = ["Math","Physics",32,"Computer","Electronics"]
console.log(Book)
console.log(Book[0])
console.log(Book[2])

// both are same

let Subjects = new Array ("Math","Physics","Computer","Electronics",42)
console.log(Subjects[1])
console.log(Subjects[4])
// to update any subject
Subjects[2] = "Information Technology"
console.log(Subjects[2])


// Operations on array

// to check lenght or elements
let elements = ["Math","Physics",32,"Computer","Electronics"];
console.log(elements.length)

// to add element in the last
elements.push("last Subject")
console.log(elements)
console.log(`Lenght of elemnts is ${elements.length}`) 

// to add element at first
elements.unshift("First Subject")
console.log(elements)
console.log(`Lenght of elemnts is ${elements.length}`) 

// to remove element from last
elements.pop()
console.log(elements)
console.log(`Lenght of elemnts is ${elements.length}`) 

// to remove element from first
elements.shift()
console.log(elements)
console.log(`Lenght of elemnts is ${elements.length}`) 

// to remove element from specific part , splice( position, no.of elements) is use for it
elements.splice(0,2)
console.log(elements)

// to blanked the array
// elements.length = 0; 
// both are same
elements = [];
console.log(elements)


// To check the position of element from array
let element1 =  ["Math","Physics",32,"Computer","Electronics"];
console.log(element1.indexOf("Computer"))

// To check the given array is actually array
let checkarray =  ["Math","Physics",32,"Computer","Electronics"];
let falsearray = "Math"
console.log(Array.isArray(falsearray))
console.log(Array.isArray(checkarray))

// convert text (string) to array (split)
let text = "This is Tutorial regarding Javascript"
convertedtext = text.split(" ")
console.log(convertedtext)
console.log(typeof convertedtext)

// convert array to string(text)
let arra =  ["Math","Physics",32,"Computer","Electronics"];
convertedarra = arra.join(" - ")
console.log(convertedarra)
console.log(typeof convertedarra)

// Join two array
let arra1 =  ["Math","Physics",32,"Computer","Electronics"];
let arra2 =  ["Math","Physics",32,"Computer","Electronics","Join Array"];
let joinedarra = arra1.concat(arra2)
console.log(joinedarra)

//  Array in Array or multi dimensional array
let arra3 = ["Chemistry","Physics",32,"Computer","Electronics"];
let multiarra = [
    ["Math",30],  // numbering starts from 0 for outer and in inner
    ["Sindhi",40,"Practical",15],
    ["Electronics",20],
    ["Electronics",20,["1st","2nd"]]
]
let fetcharra = multiarra[0][0] //we give call araay[] then inside elemnet[]
let fetcharra1 = multiarra[1][3] //we give call araay[] then inside elemnet[]
let fetcharra2 = multiarra[1] // we call whole array
let fetcharra3 = multiarra[3][2][0] // we call array in array first(position of main array),second(Position of inner array),third(position of element)
console.log(fetcharra)
console.log(fetcharra1)
console.log(fetcharra2)
console.log(fetcharra3)

// call array through loop
let subject1 = ["Math","Physics",32,"Computer","Electronics"];
let lenghtsubject1 = subject1.length;
for (let i = 0; i < lenghtsubject1; i++) {
    console.log(`Element ${i} is ${subject1[i]}`) 
}

// call array through (forEach) function
subject1.forEach(myfu);
function myfu(value) {
    console.log(value)
}


