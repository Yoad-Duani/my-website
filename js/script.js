// var isHover new Boolean(false)
// var isHover = false;
$(document).ready(function() {

  var isHover = false;


  // wow initiation
  new WOW().init();

  //
  // jQuery.getScript("resources/Magnific-Popup-master/dist/jquery.magnific-popup.js");

  // navigation bar toggle
  $('#navbar-toggler').click(function() {
    $(".navbar-collapse").slideToggle(400);
  });

  // navigation bar link
  $('.nav-link').click(function() {
    $(".navbar-collapse").slideToggle(400);
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
