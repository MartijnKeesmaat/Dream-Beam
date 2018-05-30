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
