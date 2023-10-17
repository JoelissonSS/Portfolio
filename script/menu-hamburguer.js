const hamburguer = document.querySelector(".hamburguer");
const menuList = document.querySelector(".header-nav-list");

hamburguer.addEventListener("click", () => {
  menuList.classList.toggle("active");
  hamburguer.classList.toggle("active");
});
