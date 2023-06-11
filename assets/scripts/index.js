

const scrollBtn = document.querySelector(".scrollToUp")

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none"
    }
}

window.onscroll = function () { scroll() };

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// animação do campo de busca

const campoBuscar = document.querySelector(".buscar")
const lupa = document.querySelector(".search")

lupa.addEventListener('click', () => {
    campoBuscar.classList.toggle("buscarAnimation")
})


// menu hamburguer


let hamburguer = document.querySelector(".fa-bars")
let closeHamburguer = document.querySelector(".fa-x")
let menu = document.querySelectorAll(".nav-menu")

hamburguer.addEventListener('click', ()=>{
    menu[0].classList.add('nav-menu-show')
    menu[0].classList.add('slideDown')
    
})

closeHamburguer.addEventListener('click', ()=>{
    menu[0].classList.remove('nav-menu-show')
})
 
menu.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menu[0].classList.remove('nav-menu-show')
    })
}) 

// animação de Pre-Load

let load = document.querySelector(".container-loading")

window.addEventListener("load", () => {
    setTimeout(() => {
        load.style.display = "none"
    }, 4000)
})


// botao submit footer

let bntSubmit = document.querySelector(".newsletter-form-subscribe")

bntSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    alert("Obrigado por assinar nossa Newsletter! :)")
})