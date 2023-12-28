const init = document.querySelector('#app').style = 'display: block;'
import copyOnClick from "./modules/copyOnClick.js";
import menuHamburguer from "./modules/menuHamburguer.js";
import selectSection from "./modules/selectSection.js";
import { SlideNav } from "./modules/slide.js";
menuHamburguer();
copyOnClick();
selectSection();
const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addControl();

