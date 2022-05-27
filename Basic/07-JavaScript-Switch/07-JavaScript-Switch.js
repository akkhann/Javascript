// JavaScript Switch

let input,input1,input2,input3;  // if input is 1,"y","yes" so output will be ( continue....)
            // if input is 0,"n","no" so output will be ( end....)   
input = "y";
input3 = "n";
input1 = "y";
input2 = "W";

if (input === 1) {
   console.log("Continue.....") 
} else if (input === "y") {
    console.log("Continue.....") 
}
  else if (input === "yes") {
    console.log("Continue.....") 
}
  else if (input === 0) {
    console.log("End.....") 
}
  else if (input === "n") {
    console.log("End.....") 
}
  else if (input === "no") {
    console.log("End.....") 
}else{
    console.log("Answer is Wrong")
}

// both are same
if (input3 === 1 || input3 === "y" || input3 === "yes") {
   console.log("Continue.....") 
}
  else if (input3 === 0 || input3 === "n" || input3 === "no") {
    console.log("End.....") 
}
else{
    console.log("Answer is Wrong")
}


// Switch statements only work in stircth statements ( === )

switch (input1) {
    case 1:
        console.log("Continue.....")
        break;
    case "y":
        console.log("Continue.....")
        break;
    case "yes":
        console.log("Continue.....")
        break;
    case 0:
        console.log("End.....")
        break;
    case "n":
        console.log("End.....")
        break;
    case "no":
        console.log("End.....")
        break;
    default:
        console.log("Wrong Answer")
}
// both  will work same 
switch (input2) {
    case 1:
    case "y":
    case "yes":
        console.log("Continue.....")
        break;
    case 0:
    case "n":
    case "no":
        console.log("End.....")
        break;
    default:
        console.log("Wrong Answer")
}

