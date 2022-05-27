let age = 10;
let hasdomilce = "yes";
let age1 = 10;
let hasdomilce1 = "yes";

// 1 condition
if(age>=18){
    console.log("yes you can vote")
}
else{
    console.log("No you can't wake")
}

// 2nd condition
if(age>=10 && hasdomilce == "yes"){
    console.log("yes you can vote")
}
else{
    console.log("No you can't wake")
}

// 3rd condition 
if(age>=10 && hasdomilce == "no"){
    console.log("yes you can vote")
}
else{
    console.log("No you can't wake")
}

// 4th condition 
if(age>=10 || hasdomilce == "no"){
    console.log("yes you can vote")
}
else{
    console.log("No you can't wake")
}

// 5th 
if(age>=11 && hasdomilce == "yes"){
    console.log("yes you can vote")
}else if(age !=11 && hasdomilce == "yes"){
    console.log("Your age is below 11")
}
else{
    console.log("No you can't wake")
}

// 6th Condition and nested if else

if(age>=9){

    if( hasdomilce1 == "yes" ){
        console.log("Whoa yes you can vote")
    }else{
        console.log("get your domicile")
    }

}
else{
    console.log("No you can't wake")
}

// 7th Condition for login and logout
let loggedin = 0;  // 0 means you are now login
let loggedout = 1;  // 1 means you are logout

if (loggedin == 0) {
    console.log("You are login")
} else {
    console.log("You are Logout")
}

if (loggedout == 0) {
    console.log("You are login")
} else {
    console.log("You are Logout")
}

// ternary operator

let option = loggedin == 1? "You are Login" : "You are Logout";
console.log(option)          // true                 fasle

// nullish coalescing operator

let user;
// user = "Ehsan"
console.log(user ?? "User is not defined")