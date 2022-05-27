// Template Literal

let myname = "ehsan";
let age = 22;
console.log(`Hi ${myname} your age is ${age} `)

// For new line in console
let a = "Ehsan \n Khan"
console.log(a)

// For new line in webpage
let b = "Ehsan <br> Khan"
document.write(b)

// For space like tab in console
let c = "Ehsan \t Khan"
console.log(c)

// For \  in console
let d = "Ehsan \\ Khan"
console.log(d)

// For lenght of variable
let e = "Ehsan \\ Khan"
console.log(e.length)

// To view specific position of variable and numbering start from 0
let f = "Ehsan \\ Khan"
console.log(f[3])

// plus string
console.log(e + " " + f)

//
let g = "Ehsan \\ Khan"
if (g == "Ehsan \\ Khan") {
    console.log("Equal")
} else {
    console.log("Not Equal")
}

// Concate function
let h = g.concat(" ", f, " and " , d)
console.log(h)

// substr first parameter is start position and second is lenght
let text = "This is tutorial regarding JavaScript and Keep watching Now";
console.log(text.substr(8,18))

// substring first parameter is start position and second is also continue the position
let text1 = "This is tutorial regarding JavaScript and Keep watching Now";
console.log(text1.substring(8,26))

// indexOf will check starting position of value in text
let text2 = "This is tutorial regarding JavaScript and Keep watching Now";
console.log(text2.indexOf("regarding"))

// trim use for to remove white spaces from start and end
let text3 = "           This is tutorial regarding JavaScript and Keep watching Now          ";
console.log(text3.trim())
console.log(text3.trimEnd())
console.log(text3.trimStart())

// use for upper and lower case
let text4 = "This is tutorial regarding JavaScript and Keep watching Now";
console.log(text4.toUpperCase())
console.log(text4.toLowerCase())

// replace
let text5 = "This is tutorial regarding JavaScript and Keep watching Now";
console.log(text5.replace("tutorial","video"))
// console.log(text4.toLowerCase())

// check it is present or not
let text6 = "This is tutorial regarding JavaScript and Keep watching Now";
console.log(text6.includes("tutorialss"))
console.log(text6.indexOf("html"))