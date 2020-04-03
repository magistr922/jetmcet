
 $(function(){
 $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    asNavFor: '.slider-nav__inner',
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
        }
      },
     
    ]
  });
  $('.slider-nav__inner').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
        }
      },
     
    ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });

});