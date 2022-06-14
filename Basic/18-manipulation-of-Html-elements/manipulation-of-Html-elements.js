// Create and Append Element of html through javascript


// steps:
// 1: call that id
// 2: create tag or element
// 3: write content in it
// 4: append or link 

let element, elementh2,elementh3, elementh2text;

// call
element = document.getElementById("createid")

// create
elementh2 = document.createElement("h2")
elementh3 = document.createElement("h3")

// write content or text
elementh2text = document.createTextNode("This a h2")
// or create with propertie not with function
elementh3.textContent = "This is h3"

// append means link them with each other
element.appendChild(elementh2)
element.appendChild(elementh3)
elementh2.appendChild(elementh2text)

// append in body after all of the divs
// document.body.appendChild(elementh2text)

// add class in h2
elementh2.className = "cls"

// add id in h2
elementh2.id = "h2id"





// insert before

let inh1, inh1create, inh1position, removeposition;

// call
inh1 = document.getElementById("insertid");

// create h1
inh1create = document.createElement("h1")
inh1create.textContent = ("This is insert before (h1)")

// position of insert
inh1position = inh1.firstElementChild.nextElementSibling.nextElementSibling;

// position of remove
removeposition = inh1.firstElementChild

// append or insert before (pass two parameters)
inh1.insertBefore(inh1create, inh1position)


// Remove Child Element (abc 1) (pass only one parameter)
inh1.removeChild(removeposition)






// Clone 

// create variable
let cloneinh1,callcloneid;

// call
callcloneid = document.getElementById("cloneid")

// clone above id (inh1) content
cloneinh1 = inh1.cloneNode(true)
cloneinh1.id = "abc"

console.log(cloneinh1)
callcloneid.appendChild(cloneinh1)





// Replace 

let replace, replacecreate, replaceposition;

// call
replace = document.getElementById("replaceid")

// create
replacecreate = document.createElement("h5")
replacecreate.textContent = "Now its change to h5"

// position
replaceposition = replace.firstElementChild.nextElementSibling

replace.replaceChild(replacecreate,replaceposition)




// Insert Adjacent HTML


let adjacenth2,adjacenth2text;

// call
adjacenth2 = document.getElementById("adjacentid")

// create and text
// adjacenth2text = " <h2>Now this h2</h2> "


// four value passed beforebegin, afterbegin ,beforeend, afterend
adjacenth2.insertAdjacentHTML("afterbegin"," <h2>Now this first h2</h2> ")
adjacenth2.insertAdjacentHTML("afterend"," <h2>Now this second h2</h2> ")






// change attribute through javascripte

let changeattribute;

changeattribute = document.getElementById("changeAtt") 

// set
changeattribute.setAttribute("type","button")

// get
let valueofatt = changeattribute.getAttribute("type")
console.log(valueofatt)

// remove
changeattribute.removeAttribute("name")

// check
let checkatt = changeattribute.hasAttribute("typebbnm")
console.log(checkatt)


