const swiper = new Swiper(".swiperComentarios", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    effect:'fade',
  
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });