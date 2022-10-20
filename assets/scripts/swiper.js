const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect:'fade',
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });