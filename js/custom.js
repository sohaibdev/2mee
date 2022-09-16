
/*--### LOGO SLIDER ###--*/
$(".logo-slider").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  loop: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
