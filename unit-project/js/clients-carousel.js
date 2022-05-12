$(document).ready(function(){
  const owl = $('#clients-carousel');
  
  owl.owlCarousel({
    items: 1,
    loop: true
  });

  const prev = $('#buttonPrev');
  const next = $('#buttonNext');

  prev.click(function () {
    owl.trigger('prev.owl.carousel')
  });

  next.click(function () {
    owl.trigger('next.owl.carousel')
  });

});

