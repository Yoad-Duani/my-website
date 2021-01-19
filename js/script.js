// var isHover new Boolean(false)
// var isHover = false;
$(document).ready(function() {



  // counter up

  setTimeout(function(){
  const counters = document.querySelectorAll('.counter')
  const speed = 300;
  counters.forEach(counter => {
    const updateCount = () =>{
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;

      if(count < target){
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount,120);
      }
      else{
        count.innerText = target;
      }
    }
    updateCount();
  });
},3500);
  // end counter up



  var isHover = false;


  // wow initiation
  new WOW().init();

  //
  // jQuery.getScript("resources/Magnific-Popup-master/dist/jquery.magnific-popup.js");

  // navigation bar toggle
  $('#navbar-toggler').click(function() {
    $(".navbar-collapse").slideToggle(400);
    $(this).find("i").toggleClass("fas fa-bars fas fa-times");
  });

  // navigation bar link
  $('.nav-link').click(function() {
    $(".navbar-collapse").slideToggle(400);
    $("#navbar-toggler").find("i").toggleClass("fas fa-bars fas fa-times");
  });




  //navbar bg change on scroll
  $(window).scroll(function() {
    let pos = $(window).scrollTop();
    if (pos > 100) {
      $(".navbar").addClass("cng-navbar");
    } else {
      $(".navbar").removeClass("cng-navbar");
    }
  });

  //navbar color link change on scroll
  $(window).scroll(function() {
    let pos = $(window).scrollTop();
    if (pos > 100) {
      $(".nav-link").addClass("nav-link-change");
    } else {
      $(".nav-link").removeClass("nav-link-change");
    }
  });






  // navbar change toggler
  // $('#navbar-toggler').click(function() {
    // $('#display_advance').toggle('1000');
    // $("i", this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
// });
  // <i class="fas fa-times"></i>






  // sample video popup
  $(document).ready(function() {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  });


  // slide pre-loade
  // $(document).ready(function(){
  //
  // });



  // team carousel
  $('.projects .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }

    }
  });


  // faq accordion
  $('.faq-head').each(function() {
    $(this).click(function() {
      $(this).next().toggleClass('show-faq-content');
      let icon = $(this).children('span').children("i").attr('class');

      if (icon == "fas fa-plus") {
        $(this).children('span').html('<i class = "fas fa-minus"></i>')
      } else {
        $(this).children('span').html('<i class = "fas fa-plus"></i>')
      }
    });
  });



  //testimonial carousel
  $('.testimonial .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    items: 1
  });




setTimeout(function(){
  $('body').addClass('loaded');

},3000);



// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});







  // $('.hover').on('touchstart touchend', function(e) {
  //       e.preventDefault();
  //       $(this).toggleClass('hover_effect');
  //   });


  // $('.snip1482').click(function() {
  //   // $(".navbar-collapse").slideToggle(400);
  //   if (isHover === false) {
  //     if (this.matches(':hover')) {
  //
  //
  //       isHover = true;
  //     }
  //   } else {
  //     console.log(20);
  //     isHover = false;
  //   }
  // });

  /* Demo purposes only */
  // $(".hover").mouseleave(
  //   function () {
  //     $(this).removeClass("hover");
  //   }
  // );



});


// var loader;
// function loadNow(opacity){
//   if(opacity <= 0){
//     displayContent();
//   }
//   else{
//     loader.style.opacity = opacity;
//     window.setTimeout(function(){
//       loadNow(opacity - 0.5)
//     },100);
//   }
// }
//
// function displayContent(){
//   loader.style.display = 'none';
//   document.getElementById('')
// }
//
// document.addEventListener("DOMContentLoaded" , function(){
//   loader = document.getElementById('loader');
//   loadNow(1);
// });
