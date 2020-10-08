/* RESPONSIVE PAGE NAVIGATION USING BURGER MENU STARTS HERE*/
let btnToggle = document.querySelector('.burg-button');
let toggleNav = document.querySelector('.nav-toggle');
let navigation = document.querySelector('.navigation')

let navList = document.querySelector('.nav-list');
let coverAll = document.querySelector('.btn-cover');
let btnChange = document.querySelector('.btn-change');

/* CHANGE BURGER_MENU BOTTON ON CLICK */
btnToggle.addEventListener('click',function() {
  btnToggle.classList.toggle('change');
})

/* OPEN TOGGLE NAVIGATION LIST MENU */
toggleNav.style.display = 'none'
btnToggle.addEventListener('click',function() {  
  if(toggleNav.style.display == 'none') {
    toggleNav.style.display = 'block'
    setTimeout(function() {
    },800)
/* CLOSE TOGGLE NAVIGATION LIST MENU */ 
    toggleNav.classList.remove('nav-toggle-dissapear')
  } else if(toggleNav.style.display == 'block') {
    toggleNav.classList.add('nav-toggle-dissapear')
    setTimeout(function() {
      toggleNav.style.display = 'none'
    },800)
    
  }
})


/* EXTENDING SPOT WHICH COVERS ALL PAGE */
btnToggle.addEventListener('click',function() {
  coverAll.classList.toggle('btn-change');
})



/* RESPONSIVE PAGE NAVIGATION USING BURGER MENU ENDS HERE*/




/* FLIPPING CARDS START HERE */

const cardFirst = document.querySelector('.cards');
cardFirst.addEventListener( 'click', function() {
  cardFirst.classList.toggle('is-flipped');
});

const cardSecond = document.querySelector('.cards-1');
cardSecond.addEventListener( 'click', function() {
    cardSecond.classList.toggle('is-flipped-1');
}); 

/* FLIPPING CARDS END HERE */


/* SLIDER STARTS HERE*/
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
          dots: false
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

/* SLIDER ENDS HERE*/