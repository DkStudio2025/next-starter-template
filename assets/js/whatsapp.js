// Script para el botón de WhatsApp
document.addEventListener("DOMContentLoaded", () => {
  // Detectar si es dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const whatsappButton = document.getElementById("whatsappButton")

  if (whatsappButton) {
    // Cambiar URL según el dispositivo
    whatsappButton.addEventListener("click", (e) => {
      const phone = "573205134117" // Número actualizado con el formato correcto
      const message = "Hola, me interesa consultar sobre tus servicios."

      let whatsappUrl
      if (isMobile) {
        whatsappUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`
      } else {
        whatsappUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
      }

      whatsappButton.href = whatsappUrl
    })

    // Mostrar versión expandida en desktop
    if (!isMobile) {
      whatsappButton.classList.add("expanded")
    }
  }

  // Efecto de aparición con delay
  setTimeout(() => {
    if (whatsappButton) {
      whatsappButton.style.opacity = "1"
    }
  }, 1500)
})
