

const scrollBtn = document.querySelector(".scrollToUp")

function scroll () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none"
    }
}

window.onscroll = function() {scroll()};

scrollBtn.addEventListener("click",()=>{
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})

// animação do campo de busca

const campoBuscar = document.querySelector(".buscar")
const lupa = document.querySelector(".search")

lupa.addEventListener('click', ()=> {
    campoBuscar.classList.toggle("buscarAnimation")
})


// menu hamburguer

let hamburguer = document.querySelector(".fa-bars")
let close = document.querySelector(".fa-x")
let menu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("nav-menu-show")
    menu.classList.remove("nav-menu")
})
close.addEventListener("click", ()=>{
    menu.classList.toggle("nav-menu-show")
    menu.classList.add("nav-menu")
})