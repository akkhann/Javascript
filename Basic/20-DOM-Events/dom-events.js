// click EventListener


// Onclick through inline
function btnclick(){
    prompt("Ehsan","")
}


// Onclick through addEventListener
let clickadd;

clickadd = document.getElementById("btn1")

function btnclick1(){
    prompt("Ehsan1","AddEventListener")
}

clickadd.addEventListener("click",btnclick1)

// mouseover mouseleave through addEventListener
clickadd.addEventListener("mouseover",function(){
    console.log("Mouse is hover")
})
clickadd.addEventListener("mouseleave",function(){
    console.log("Mouse is leave")
})




// remove event listener

let remove;

remove = document.getElementById("btn2")

function removeclick(){
console.log("click a is actvated")
}
function removeclick1(){
console.log("click b is actvated")
}
remove.addEventListener("click",removeclick)
remove.addEventListener("click",removeclick1)
// it will remove click1
remove.removeEventListener("click",removeclick1)




// DOMContentLoaded means show functonlity before load content 
// load means show functonlity after load content 

// for Whole document

window.addEventListener("DOMContentLoaded",function(){
    console.log("DomContentloaded is activated")
})

window.addEventListener("load",function(){
    console.log("load is activated")
})

// on particaular element

let websiteframe;

websiteframe = document.getElementById("web")

websiteframe.addEventListener("load",function(){
    console.log("Website load is activated")
})




// Mouse Events

let mouseclicks

mouseclicks = document.getElementById("mouseevents")

function mousclk1 (){
    console.log("Mouse was click")
}
function mousclk2 (){
    alert("right click is enabled")
}
function mousclk3 (){
    alert("double click is enabled")
}
function mousclk4 (){
    alert("mouse out is enabled")
}



// click Event
mouseclicks.addEventListener("click",mousclk1)

// right click event
mouseclicks.addEventListener("contextmenu",mousclk2)

// double click event
mouseclicks.addEventListener("dblclick",mousclk3)

// mouse out event
mouseclicks.addEventListener("mouseout",mousclk4)





// show any key press by user

window.addEventListener("keydown",check)

function check(eventcheck){
    console.log(eventcheck.key)
}







// scroll event

window.addEventListener("wheel",function(event){
    if( event.deltaY < 0 ){
        console.log("Scrolling up..")
    }else if( event.deltaY > 0 ){
        console.log("Scrolling down..")
    }
})

window.addEventListener("scroll",function(){
    if( window.pageYOffset > 150 ){
        document.body.style.background = "red"
    }else{
        document.body.style.background = "white"
    }
})





// Input Events

let inputevent;

inputevent = document.getElementById("inputid")

inputevent.addEventListener("focus", myfocus)
inputevent.addEventListener("blur", myblur)
inputevent.addEventListener("change", myvalue)
// inputevent.addEventListener("input", myinput)

// focus use for click on inside of input
function myfocus (){
    inputevent.style.border = "7px solid green"
    inputevent.style.background = "yellow"
}

// blur use for click on outside of input
function myblur (){
    inputevent.style.border = "4px solid yellow"
    inputevent.style.background = "blue"
}

// change use for to store input value when click outside the input
function myvalue (){
    console.log(this.value)
}

// input event use for to store input value live
// function myinput (){
//     console.log(this.value)
// }






// Event Bubbling & Event Capturing
// when click on btn ,  btn, div and body is also clicked
// when click on div ,  div, body is also clicked
// when click on body , only body is clicked
// it continues from parent to child and by default it is false and turn true it will continue from child to parent

let mydiv,mybtn;

mybtn = document.getElementById("mybtnid")
mydiv = document.getElementById("mydivid")

function fmybtn(eevent){
    console.log("btn is clicked")
    eevent.stopPropagation() // it means it will stop continues propagation till parent
}
mybtn.addEventListener("click",fmybtn)


function fmydiv(){
    console.log("div is clicked")
}
mydiv.addEventListener("click",fmydiv)


function fmybody(){
    console.log("body is clicked")
}
document.body.addEventListener("click",fmybody)






// Prevent Default it means to prevent or stop that that particular function

let preventform;

preventform = document.getElementById("inputform")

preventform.addEventListener("submit",function (event){
    event.preventDefault();
})





