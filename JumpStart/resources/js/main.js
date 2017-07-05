$(document).ready(function(){

  //Slick Configuration for the Carousel Effect
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  //Hide Navigation on Scroll
  var previousScroll = 0,
    headerOrgOffset = $('.nav').height();

  $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll  - lastScrollTop > 50) {
        var navHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navHeight}, 150);
          lastScrollTop = currentScroll;
        } else if (lastScrollTop - currentScroll > 50) {
          $('.navbar').animate({top: '0px'}, 150);
        }
      previousScroll = currentScroll;
  });

});
