// SLIDER

$(".bestseller__main").slick({
  slidesToShow: 1,
  slidesToScroll: 3,
  arrows: false,
  fade: true,
  asNavFor: ".bestseller__nav__wrapper",
});
$(".bestseller__nav__wrapper").slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  asNavFor: ".bestseller__main",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
