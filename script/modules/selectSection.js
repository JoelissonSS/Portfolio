export default async function selectSection() {
  const item = document.querySelectorAll(".header-nav-list-items");
  const section = document.querySelectorAll("body section");
  let currentSection = null;
  section.forEach((s) => {
    const sectionVerify = s.getBoundingClientRect(); //variavel para verificar onde esta a visao do usuario
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    if (
      sectionVerify.left < centerX &&
      sectionVerify.right > centerX &&
      sectionVerify.top < centerY &&
      sectionVerify.bottom > centerY
    ) {
      currentSection = s.id;
    }
  });

  item.forEach((e) => {
    if (currentSection == e.innerText) {
      e.style.setProperty("--width", "100%");
    } else {
      e.style.setProperty("--width", "30%");
    }
  });
}
window.addEventListener("scroll", selectSection, );
