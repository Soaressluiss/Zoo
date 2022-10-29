AOS.init();

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


// animação menuDropDown

const aboutUs = document.querySelector(".aboutUs")
const aboutUsList = document.querySelector(".list-aboutUs")

aboutUs.addEventListener("mouseover", ()=>{
    aboutUsList.classList.toggle('list-aboutUsShow')
    console.log(aboutUsList)
})
