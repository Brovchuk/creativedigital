;(function ($) {
  $('#about').click(function () {
      $('html, body').animate({
          scrollTop: $('.about').offset().top
      }, 300);
  });
  $('#services').click(function () {
      $('html, body').animate({
          scrollTop: $('.about_flex').offset().top
      }, 300);
  });
  $('#works').click(function () {
      $('html, body').animate({
          scrollTop: $('.works').offset().top
      }, 300);
  });
  $('#contact').click(function () {
      $('html, body').animate({
          scrollTop: $('.contact').offset().top
      }, 300);
  });
  $('.scroll-top').click(function () {
      $('html, body').animate({
          scrollTop: $('.landing').offset().top
      }, 300);
  });


  })(jQuery);
