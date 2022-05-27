// Object

let person = {
    firstName: "Ehsan",
    lastName: "Ali",
    age1: 15,
    asc: "akchcjk"
}
// to update propertie
person.age1 = 22
// to create propertie
person.middlename = "Khan"
// to delete propertie
delete person.asc
// to check propertie is present in object
console.log("asc" in person) // it will return false

console.log(person.firstName)
console.log(person["lastName"])
console.log(person.age1)
console.log(person)


// excess all propertie in object
for (let key in person) {
    console.log(key);
    console.log(key + ": " + person[key]) // . notation will not work in loop
}


// Method in Object or Function in Object
// 
// 1 method
person.sayhello = function () {
    console.log("Hello")
}
person.sayhello();

// 2 method
function greet() {
    console.log("Hi World")
}
person.sayhi = greet;
person.sayhi();

// 3 Method
let newperson = {
    firstName: "Afaq",
    lastName: "Khan",
    saynew: function () {
        console.log("New Car")
    },
    // 4th method
    saypaji() {
        console.log("Paji World")
    },
    // this in object we use for his own object
    saytaji() {
        console.log("hi i am " + this.firstName + " and having last name " + this.lastName + " and i'am enjoying it")
    }
}
newperson.saynew();
newperson.saypaji();
newperson.saytaji();



// predefined math in object


// for roundef value
var s = Math.round(6.5)
console.log(s)

// ceil means upper value
var sa = Math.ceil(5.2)
console.log(sa)

// floor means lower value
var sab = Math.floor(5.9)
console.log(sab)

// trunc means remove point
var removeq = Math.trunc(4.9)
console.log(removeq)

// pow means power of value
var power = Math.pow(3, 4)
console.log(power)

// pow means power of value
var squroot = Math.sqrt(81)
console.log(squroot)

// min means minimum value
var minvalue = Math.min(81, 434, 86, 2, 0.1, -2)
console.log(minvalue)

// max means maximum value
var maxvalue = Math.max(81, 434, 86, 2, 0.1, -2)
console.log(maxvalue)

// Generate Random Numbers

let randomnum1 = Math.random(); // it will give numbers in points
console.log(randomnum1)

let randomnum2 = Math.random() * 10; // it will give numbers in points from 0-9 
console.log(randomnum2)

let randomnum3 = Math.random() * 12; // it will give numbers in points from 0-11 
console.log(randomnum3)

let randomnum4 = Math.trunc(Math.random() * 12); // it will give numbers without points from 0-11 
console.log(randomnum4)

let randomnum5 = Math.trunc(Math.random() * 120); // it will give numbers without points from 0-119 
console.log(randomnum5)

// numbers in  between 15-24
let randomnum6 = Math.trunc(Math.random() * (25 - 15)) + 15; // where 25 is maximum which will not include in the result and 15 is minimum which will include in the result
console.log(randomnum6)



// numbers in  between 10-22 through finction 
function getrandom(min, max) {
    let randomnum7 = Math.trunc(Math.random() * (max - min)) + min;
    return randomnum7;
}
console.log(getrandom(10, 23))



// predefined Date Object

// current date in my system
let date1 = new Date()
console.log(date1)

// patteren is (year, month and is starts from 0 means junuary and 1 means feb, day, hour, minutes, sec, millisec)
let date2 = new Date(2020, 3, 24, 4, 12, 56, 55)
console.log(date2)

// custom date formate
let date3 = new Date("2024,Feb,5,4:12:56:55")
date3.setSeconds(20)
date3.setDate(date3.getDate() + 12) // it means add 12 days in current date
console.log(date3)
console.log(date3.getTime()) // time in sec from 1970
console.log(date3.getMonth())
console.log(date3.getFullYear())


// getter and setter
let applicant = {
    name: "Ehsan",
    age: 22,
    // getname: function(){
    //     return this.name.toUpperCase()
    // } down one are same

    get getname() {
        return this.name.toUpperCase()
    },

    set setname(n) {
        this.name = n.toUpperCase()
    }

}
// console.log(applicant.getname())
console.log(applicant.getname) //get function call like propertie above one and this are same
//get function call like propertie above one and this are same

applicant.setname = "Ehsanaa"
console.log(applicant.name)   



// Object constructor function and it is used to create same properties of multiple objects

let students = {
    fistName: "Ehsan Ali",
    lastName: "khan",
    age: 22,
    class: 12,
}
console.log(students)

  
// both are same
// Object constructor function

function Student(first, last, age, klass){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = klass;
}


var student1 = new Student("Ehsan Ali","Khan",22,12)
console.log(student1);
var student2 = new Student("Afaq Ali","Khan",27,12)
console.log(student2);
var student3 = new Student("Saboor Ali","Khan",57,12)
console.log(student3);

// add propertie(parameter) in variable student1
student1.color = "Brown"
console.log(student1);

// add function in variable student1
student1.fullnamefunction = function (){
    return this.firstName + " " + this.lastName
}
console.log(student1);
console.log(student1.fullnamefunction());

// add propertie in Object constructor function
Student.prototype.nationality = "Pak" 
console.log(student3.nationality)



// Nested Object
let user = {
    Name: "Ehsan Ali Khan",
    RollNo: 36,
    email: "ekkhanehsan@gmail.com",
    University: {
        Department: "Computer Science",
        Semester: 3,
        Subjects:{
            Ict: "Sir Fida",
            Programming: "Sir Manan"
        }

    }
}
console.log(user)
console.log(user.University)
console.log(user.University.Subjects)
console.log(user.University.Subjects.Ict)