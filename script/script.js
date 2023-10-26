import copyOnClick from "./modules/copyOnClick.js";
import menuHamburguer from "./modules/menuHamburguer.js";
import selectSection from "./modules/selectSection.js";
import scrollAutomatic from "./modules/scrollautomatic.js";
menuHamburguer();

document.addEventListener("DOMContentLoaded", () => {
  copyOnClick();
  selectSection();
  scrollAutomatic();
});
