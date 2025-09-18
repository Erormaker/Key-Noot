var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box") // Fixed variable name
var addpopupbut = document.getElementById("add-popup-but")

addpopupbut.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

//select cancel button
var canclepopup = document.getElementById("cancle-popup")
canclepopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})
//select over all continer ,add-book ,book-name ,author-name ,discription

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bookname = document.getElementById("book-name")
var authorname = document.getElementById("author-name")
var discription = document.getElementById("discription")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${bookname.value}</h2>
           <h5>${authorname.value}</h5>
           <p>${discription.value}</p>
          <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}

