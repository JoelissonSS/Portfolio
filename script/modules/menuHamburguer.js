export default async function menuHamburguer() {
  const navList = document.querySelectorAll(".header-nav-list-items");
  const hamburguer = document.querySelector(".hamburguer");
  const nav = document.querySelector(".header-nav");
  let active;
  function toggleMenu() {
    if (event.type === "touchstart") hamburguer.removeEventListener("click", toggleMenu,); //impedir de clicar duas vezes no mobile

    nav.classList.toggle("active"); //alternar
    hamburguer.classList.toggle("active");
    active = nav.classList.contains("active");

    //acessibilidade
    hamburguer.setAttribute("aria-expanded", active);
    active
      ? hamburguer.setAttribute("aria-label", "Fechar menu")
      : hamburguer.setAttribute("aria-label", "Abrir menu");
  }
  //fechar menu ao clicar num link
  navList.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
    });
  });
  hamburguer.addEventListener("click", toggleMenu,);
  hamburguer.addEventListener("touchstart", toggleMenu, {passive:true});

}
