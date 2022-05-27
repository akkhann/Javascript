// Document Object Model (DOM):

// dom means to manipulate html through Javascript ex: add, delete the element


// How to select an element by id:

let element;
element = document.getElementById("abc") // if id not present it will give null
console.log(element)

// How to get   and set element by innerhtml

let innerelement;
innerelement = element.innerHTML = "<p> Hi Ehsan </p>" // set element
console.log(element.innerHTML) // get element

 
// How to select an element by class:

let element1;
element1 = document.getElementsByClassName("getcls")



for ( let i=0; i < element1.length; i++){
    element1[i].innerHTML = "<a> Hi </a>"
}


// How to select Multiple element by tags:

let element2, element3;

element3 = document.getElementById("tagdiv")
element2 = element3.getElementsByTagName("h3") // it will only change h3 under tagdiv which is stored in element3

for ( let i = 0; i < element2.length; i++){
    element2[i].innerHTML = " Converted h3 "
}


// How to select an element by queryselector:

let element4;
element4 = document.querySelector("em.querys1") // queryselector work on first satsified element not all of same classes elements
console.log(element4)
element4.innerHTML = "Ehsan 1"
console.log(element4.innerHTML)


// How to select an element by queryselectorall:

let element5;
element5 = document.querySelectorAll("em.querys") // queryselector work on first satsified element not all of same classes elements

// element5.innerHTML = "Ehsan 1"
// console.log(element5.innerHTML)

for ( let i = 0; i < element5.length; i++){
    element5[i].innerHTML = " Converted ehsan"
}
console.log(element5)


// How to select an element by Traversing elements:
// parent and sibling selection
let element6, element6select;
element6 = document.getElementById("list")
element6select = element6.parentElement
// element6select = element6.nextElementSibling // also we can select next sibling
// element6select = element6.previousElementSibling // also we can select previous sibling
console.log(element6select)

// children selection
let element7, element7select;
element7 = document.getElementById("list2")
element7select = element7.firstElementChild
// element7select = element7.lastElementChild //we can use last child as well
// element7select = element7.children //we can children for all
console.log(element7select)







