export default function scrollAutomatic() {
  const container = document.querySelector(".container-hard-skills");
  let scroll = 2
  function scrollContent() {
    //scrollar ate o final

    container.scroll({
      left: container.scrollLeft+scroll,
      behavior: "smooth"
    })
    //verificar se o scroll chegou no final
    if(container.scrollLeft == container.scrollWidth  - container.offsetWidth){
      container.scrollTo({
        left: 0,
        behavior: "instant",
      })
    }
    // parar/continuar o scroll automatico ao passar mouse sobre o elemento

    container.addEventListener('mousedown', () => {
      scroll = 0
    })
    container.addEventListener('mouseout', () => {
      scroll = 2
    })
    container.addEventListener('touchmove', ()=>{
      scroll = 0
    })
    container.addEventListener('touchend', ()=>{
      scroll = 2
    })
  }
  let scrollInterval = 100; // Intervalo de rolagem em milissegundos

 setInterval(scrollContent, scrollInterval);
  
}
