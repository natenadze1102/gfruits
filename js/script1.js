/* FLIPPING CARDS */
var cardFirst = document.querySelector('.cards');
cardFirst.addEventListener( 'click', function() {
  cardFirst.classList.toggle('is-flipped');
});

var cardSecond = document.querySelector('.cards-1');
cardSecond.addEventListener( 'click', function() {
    cardSecond.classList.toggle('is-flipped-1');
});


/* SLIDER */
$(document).ready(function() {
  $('.slider').slick({
    arrows:true,
    dots: false,
    adaptiveHeight:true,
    slidesToShow:3,
    spead:100,
    easing:'ease',
    infinite:true,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode: true,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});