document.addEventListener("DOMContentLoaded", () => {
  getSlider();
  showSlideNav();

  const navlinks = document.querySelectorAll(".menu__nav__item");
  console.log(navlinks);
});

const menuNav = document.querySelector(".menu__nav__wrapper");

async function getSlider() {
  const respond = await fetch("../JSON/slider.json");
  const data = await respond.json();
  return data;
}

async function showSlideNav() {
  const foods = await getSlider();

  foods.forEach((food) => {
    menuNav.innerHTML += `
    <div class="menu__nav__item" id="tab-${food.id}" >
    <img src="" alt="" />
    <div class="menu__nav__item__info">
      <h3>${food.title}</h3>
      <ul class="food__data">
        <li><i class="fas fa-clock"></i> ${food.info[0].prep}</li>
        <li><i class="fas fa-dollar"></i>  ${food.info[0].price}</li>
      </ul>
      <a href="#" class="btn btn--orange">Add to Card</a>
    </div>
  </div> 
    `;
  });
}
