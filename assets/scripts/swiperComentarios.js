const swiper = new Swiper('.swiperComentarios', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    effect:'fade',
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });