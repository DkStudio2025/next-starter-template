// Smooth scrolling para navegación
document.addEventListener("DOMContentLoaded", () => {
  // Navegación suave
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Header scroll effect
  const header = document.querySelector(".header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.9)"
      header.style.boxShadow = "none"
    }

    lastScrollTop = scrollTop
  })

  // Mobile menu toggle mejorado
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navMenu = document.getElementById("navMenu")

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation()

      console.log("Menu button clicked") // Para debug

      navMenu.classList.toggle("active")

      // Cambiar icono
      const icon = this.querySelector("i")
      if (navMenu.classList.contains("active")) {
        icon.className = "fas fa-times"
        document.body.style.overflow = "hidden" // Prevenir scroll
      } else {
        icon.className = "fas fa-bars"
        document.body.style.overflow = "auto" // Restaurar scroll
      }
    })

    // Cerrar menú al hacer click en un enlace
    const mobileNavLinks = navMenu.querySelectorAll(".nav-link")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
        document.body.style.overflow = "auto"
      })
    })

    // Cerrar menú al hacer click fuera
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
        document.body.style.overflow = "auto"
      }
    })

    // Cerrar menú al redimensionar ventana
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
        document.body.style.overflow = "auto"
      }
    })
  }

  // Formulario de contacto
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const formData = new FormData(this)
      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      // Mostrar loading
      submitBtn.textContent = "Enviando..."
      submitBtn.disabled = true

      fetch("contact.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            showNotification(data.message, "success")
            contactForm.reset()
          } else {
            showNotification(data.message, "error")
          }
        })
        .catch((error) => {
          console.error("Error:", error)
          showNotification("Error al enviar el mensaje. Inténtalo de nuevo.", "error")
        })
        .finally(() => {
          submitBtn.textContent = originalText
          submitBtn.disabled = false
        })
    })
  }

  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loading")
      }
    })
  }, observerOptions)

  // Observar elementos para animación
  const animatedElements = document.querySelectorAll(".service-card, .pricing-card, .testimonial-card")
  animatedElements.forEach((el) => observer.observe(el))

  // Contador animado para estadísticas
  const stats = document.querySelectorAll(".stat-number")
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        statsObserver.unobserve(entry.target)
      }
    })
  })

  stats.forEach((stat) => statsObserver.observe(stat))
})

// Función para mostrar notificaciones
function showNotification(message, type = "info") {
  // Crear elemento de notificación
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `

  // Estilos para la notificación
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : "#ef4444"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `

  // Agregar estilos de animación
  const style = document.createElement("style")
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
    `
  document.head.appendChild(style)

  // Agregar al DOM
  document.body.appendChild(notification)

  // Cerrar notificación
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.remove()
  })

  // Auto cerrar después de 5 segundos
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove()
    }
  }, 5000)
}

// Función para animar contadores
function animateCounter(element) {
  const target = Number.parseInt(element.textContent.replace(/\D/g, ""))
  const duration = 2000
  const step = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }

    const suffix = element.textContent.includes("+") ? "+" : element.textContent.includes("%") ? "%" : ""
    element.textContent = Math.floor(current) + suffix
  }, 16)
}

// Lazy loading para imágenes
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
})

// Función para validar formulario
function validateForm(form) {
  const requiredFields = form.querySelectorAll("[required]")
  let isValid = true

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add("error")
      isValid = false
    } else {
      field.classList.remove("error")
    }

    // Validación específica para email
    if (field.type === "email" && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(field.value)) {
        field.classList.add("error")
        isValid = false
      }
    }
  })

  return isValid
}

// Efecto parallax suave
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating-shape")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    const yPos = -(scrolled * speed)
    element.style.transform = `translateY(${yPos}px)`
  })
})
