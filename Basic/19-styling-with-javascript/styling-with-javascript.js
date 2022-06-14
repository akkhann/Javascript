// styling through

let stylebtn, styleinput;

stylebtn = document.getElementById("btnid")
styleinput = document.getElementById("inputid")


// inline styling through javascript we use (+=) when we want to not change exisisting inline style of html

// stylebtn.style.cssText += "background-color:aqua; color:white; padding:10px 40px;text-decoration:none;border-radius:5px  "

stylebtn.style.cssText = "background-color:aqua; color:white; padding:10px 40px;text-decoration:none;border-radius:5px  "

// inline style through setAttribute
styleinput.setAttribute("style"," border:2px solid red ")

// direct styling
styleinput.style.backgroundColor = "yellow"
styleinput.setAttribute("placeholder","input")



// Get Computed Css

let computedcss,showcomputedcss;

computedcss = document.getElementById("getcssid")
showcomputedcss = getComputedStyle(computedcss)

console.log(showcomputedcss) // this will show all styling of css
console.log(showcomputedcss.backgroundColor) // this will show current styling



// Change CSS Classes

let changecssclasses;

changecssclasses = document.getElementById("cssclassesid")

console.log(changecssclasses.className) // it will show name of classes
console.log(changecssclasses.classList) // it will show name of classes in form of array

// it will show name of css in list style
for (let cssstyle of changecssclasses.classList){
    console.log(cssstyle)
}

// add classes in classlist
changecssclasses.classList.add("addcls")

// remove classes in classlist
changecssclasses.classList.remove("removecls")

// replace (replace and add) classes in classlist
changecssclasses.classList.replace("replacecls","newreplacecls")

// toggle work as if class is present it will remove when not-present it will include
changecssclasses.classList.toggle("toglecls")

// check  classes in classlist
let checkcss = changecssclasses.classList.contains("newreplacecls")
console.log(checkcss)






// 

let getwhofelemenet, widthofele, heightofele;

getwhofelemenet = document.getElementById("gwofcssid")

// this will include border and contains padding
widthofele = getwhofelemenet.offsetWidth
heightofele = getwhofelemenet.offsetHeight
console.log(widthofele)
console.log(heightofele)

// this will not include border and contains padding
widthofele = getwhofelemenet.clientWidth
heightofele = getwhofelemenet.clientHeight
console.log(widthofele)
console.log(heightofele)




