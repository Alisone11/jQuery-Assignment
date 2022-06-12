$(document).ready(function () {
    $('.header .menu > li > a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
    });
    $('.top').click(function (e) { 
        e.preventDefault();
      $('html,body').animate({scrollTop:0},500);
    });
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'cards',
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
        //lightbox 效果
  lightbox.option({
    'fadeDuration':200,
    'dresizeDuration':200,
    'wrapAround': true
})
});