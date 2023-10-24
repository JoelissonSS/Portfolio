export default function copyOnClick() {
  const data = [
    {
      icon: 'whatsapp',
      text: '+55(12)99159-4802',
    },
    {
      icon: 'gmail',
      text: 'joelisson997@gmail.com',
    },
  ]

  data.map( (e) => {
    const icon = document.getElementById(e.icon);
    const popupText = document.querySelector('.' + e.icon);
    
    icon.addEventListener('click', () => {
        navigator.clipboard.writeText(e.text)
        popupText.innerHTML = 'copiado!'
        setTimeout( () => {
          popupText.innerHTML = 'clique para copiar'
        }, 3000)
        
      })
    }
  )
}
