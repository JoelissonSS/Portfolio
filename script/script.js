import copyOnClick from "./modules/copyOnClick.js";
import menuHamburguer from "./modules/menuHamburguer.js";
import selectSection from "./modules/selectSection.js";
menuHamburguer();
document.addEventListener("DOMContentLoaded", () => {
  copyOnClick();
  selectSection();
});
