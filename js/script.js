$(".bestseller__main").slick({
  slidesToShow: 1,
  slidesToScroll: 3,
  arrows: false,
  fade: true,
  asNavFor: ".bestseller__nav",
});
$(".bestseller__nav").slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  asNavFor: ".bestseller__main",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});

//

// navlinks.forEach((navlinks) => {
//   navlinks.addEventListener("click", () => {
//     // const activeFood = document.getElementById(`tab-${index}-menu`);
//     // activeFood.classList.add("active");
//     console.log("asdasdasd");
//   });
// });
