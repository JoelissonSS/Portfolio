export function copyOnClick() {
  const data = [
    {
      icon: 'whatsapp',
      text: 'numforcopy',
    },
    {
      icon: 'gmail',
      text: 'emailforcopy',
    },
  ]

  data.map( (e) => {
    const icon = document.getElementById(e.icon);
    const text = document.getElementById(e.text);
    const popupText = document.querySelector('.' + e.icon);
    
    icon.addEventListener('click', () => {
        text.select();
        document.execCommand("copy");
        popupText.innerHTML = 'copiado!'
        setTimeout( () => {
          popupText.innerHTML = 'clique para copiar'
        }, 3000)
        
      })
    }
  )
}
