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
  var previousScroll = 0;

  $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll  - previousScroll > 50) {
        var navHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navHeight}, 150);
          previousScroll = currentScroll;
        } else if (previousScroll - currentScroll > 50) {
          $('.navbar').animate({top: '0px'}, 150);
        }
      previousScroll = currentScroll;
  });

});
