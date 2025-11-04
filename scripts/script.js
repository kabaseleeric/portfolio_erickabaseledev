// *********** menus toggles *********** //

/*let toggleMenus = document.getElementById("toggle")
let dropdown = document.querySelector(".banner .nav-bar .dropdown")
dropdown.style.display = "none"

let closeToggle = document.querySelector(".banner .nav-bar .dropdown .close")

toggleMenus.addEventListener("click",()=>{

    if(dropdown.style.display=== "none"){
        dropdown.style.display = "inline"
        toggleMenus.style.display = "none"
    }
})

closeToggle.addEventListener("click", ()=>{
    if(dropdown.style.display === "inline"){
        dropdown.style.display="none"
        toggleMenus.style.display="inline"
    }
})

//**************************** end menus toggle **************************/

//****************** scroll widget *********************//

window.addEventListener("scroll", ()=>{
    let scrollWidget = document.getElementById("scroll")
    scrollWidget.style.display ="none"

    if(window.scrollY > 50 && scrollWidget.style.display ==="none"){
        scrollWidget.style.display="inline"
    }

    scrollWidget.addEventListener("click", ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })
})

//****************** end scroll widget *********************//

//****************** readmore *********************//

let readMore = document.getElementById("readmore")
readMore.style.display="none"
let btnReadmore = document.getElementById("btn-readmore")
btnReadmore.innerText = "lire plus"
btnReadmore.style.fontWeight="600"
btnReadmore.style.cursor="pointer"

btnReadmore.addEventListener("click", () =>{
    if(readMore.style.display === "none"){
        readMore.style.display="inline"
        btnReadmore.innerText = "lire moins"
    }else{
        readMore.style.display="none"
        btnReadmore.innerText = "lire plus"
    }
})



