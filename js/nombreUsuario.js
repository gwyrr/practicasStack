export function inicializarNombre() {
    const inputNombre = document.querySelector('#inputNombre')
    const btnAgregarNombre = document.querySelector('#btnNombre')
    const saludoNombre = document.querySelector('#saludoNombre')
    const bienvenida = document.querySelector('#bienvenida')
  
    btnAgregarNombre.addEventListener('click', () => {
      const nombre = inputNombre.value.trim()
      if (nombre) {
        saludoNombre.textContent = `Hola, ${nombre}! Bienvenido a tus tareas`
        inputNombre.classList.add('oculto')
        btnAgregarNombre.classList.add('oculto')
        bienvenida.classList.add('oculto')
      } else {
        alert('Por favor ingrese su nombre')
      }
    })
  }
  