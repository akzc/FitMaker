const bntBurger = document.querySelector(".burger");
const header = document.querySelector(".header-nav-1");

bntBurger.addEventListener("click", () => {
  bntBurger.classList.toggle("burger-active");
  header.classList.toggle("active");
});
