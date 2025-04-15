export function mostrarFecha() {
    const fecha = document.querySelector('#fecha')
    const date = new Date()
    fecha.innerHTML = date.toLocaleDateString('es-co', { weekday: 'long', month: 'short', day: 'numeric' })
  }