$('.spotlight .fab').click(function(e) {
  e.preventDefault();
  var parent = $(this).parent('.spotlight');
  parent.find('.spotlight__backdrop__text').slideToggle();
  $(this).toggleClass('spotlight__fab--active');
});

$('.spotlight .fab').hover(function() {
  var parent = $(this).parent('.spotlight');
  parent.find('.spotlight__backdrop').toggleClass('spotlight__backdrop--hover');
});

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: true
  });
});
