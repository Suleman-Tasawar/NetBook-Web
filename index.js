let menuButton = document.querySelectorAll("hamburger")
let NavMenu = document.querySelectorAll("nav--links")
menuButton.addEventListener("click",()=>{
    if(NavMenu.style.display == "none"){
        NavMenu.style.display = "block"
    }

    else{
        NavMenu.style.display = "none"
    }

})