$(document).ready(function() {
  $('.menu-mobile__links').mCustomScrollbar();

  $('.menu__mob-link').on('click', function() {
    if ($('.menu-mobile').hasClass('active')) {
      $('.menu-mobile').removeClass('active');
    } else {
      $('.menu-mobile').addClass('active');
    }
  });
});
