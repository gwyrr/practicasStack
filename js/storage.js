// Guardar tareas en el localStorage
export function guardarTareasEnLocalStorage(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }
  
  // Cargar tareas desde el localStorage
  export function cargarTareasDesdeLocalStorage() {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  }