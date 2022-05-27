// we use (defer) in script link, when our script js link is execute before targeted content 
// we use (asyn) in script link, when we want that our html execute first and then download javascript  

// output of js in terms of following

// this will alert or popup
// alert("Ehsan Ali Khan")

// this will show or edit in inner html
document.getElementById("namechange").innerHTML = "ehsan to ahsan";

// this will show on current page or web page but not edit existing html and this property doesnt work on (defer)
// it depends on placement script link of js if you place link up it will show before the content and if you place link down it will show after that content  
document.write("This comes through javascript")

// this will show in console of browser it mainly use for debugging
// and if you want to write multiple line code in console use (shift + enter) without execute it will go to next line 
console.log("welcome to console");














