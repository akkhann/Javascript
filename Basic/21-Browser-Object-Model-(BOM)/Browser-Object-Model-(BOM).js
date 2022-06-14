// Browser-Object-Model-(BOM) is to interact with window which is default created by browser


let x = "Ehsan"
console.log(window.x) // it will give undefined let not worked

var ax = "Ehsan"
console.log(window.ax)

function ahsan (){
    console.log("Ehsan Ali Khan")
}
window.ahsan()



// Lets Play With Window

// it will show the inner height of window
console.log(window.innerHeight)

// it will show the inner height of window
console.log(window.innerWidth)

// it will show the outer height of window means browser
console.log(window.outerHeight)

// it will show the outer height of window means browser
console.log(window.outerWidth)


// popop

let bntevent,url,features,btnclosed,win;

bntevent = document.getElementById("btnid")
url = "https://google.com"
features = "height:500px,width:500px"

bntevent.addEventListener("click",function(){
  win =  window.open(url,"Gooogle",features)
})

// for closed
btnclosed = document.getElementById("btnid1")
btnclosed.addEventListener("click",function(){
    win.close()
})

