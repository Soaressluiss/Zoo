
const prev = document.querySelector(".fa-circle-arrow-left")
const next = document.querySelector(".fa-circle-arrow-right")


$(document).ready(function () {
    $('.carrosel-swiper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow: prev,
        nextArrow: next,

    });
});
$(document).ready(function () {
    $('.carrosel-comentarios').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow: prev,
        nextArrow: next,

    });
});