let time

// setTimeout only for once
time = setTimeout(mytime,5000)

function mytime (){
    console.log("This is setTimeOut will after 5 sec")
}
// or to stop setTimeout we use "clearTimeout"



// setInterval it is continueous
let btnid,cleart1;
cleart1 = setInterval(mytime1,2000)
function mytime1(){
    console.log("Please Wait 2 sec")
}
// or to stop setTimeout we use "clearInterval"

btnid = document.getElementById("btnid")
btnid.addEventListener("click",function(){
    clearInterval(cleart1)
})



// Location object use to know about the browser and redirect the url

console.log(location.href)
console.log(location.pathname)
console.log(location.protocol)


// Location object for (url)

function funt(){
    // window.location = "https://google.com"
    // location.href = "https://youtube.com"
    location.assign("https://youtube.com") // above one are same to this and give previous btn to go(it keeps history)
    // location.replace("https://youtube.com") // doesnt give previous btn to go(it doesnt keeps history)
    // location.reload() // it will reload the page
}


// Navigor show browser details
console.log(navigator.appName)
console.log(navigator.appVersion)
console.log(navigator.appCodeName) // Name of browser
console.log(navigator.cookieEnabled) // it will return in true or false when cookies is turn off or on
console.log(navigator.userAgent)
console.log(navigator.platform)
console.log(navigator.javaEnabled()) // it will return in true or false when javascript is turn off or on




// Screen object
console.log(screen.width) // it will show width of screen
console.log(screen.height) // it will show height of screen
console.log(screen.orientation) // it will show lanscape mode of user screen
