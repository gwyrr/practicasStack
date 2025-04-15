
import { guardarTareasEnLocalStorage, cargarTareasDesdeLocalStorage } from './storage.js';

export function inicializarTareas() {
  const lista = document.querySelector('#lista');
  const inputTarea = document.querySelector('#inputTarea');
  const btnAgregarTarea = document.querySelector('#btnAgregar');
  
  // Cargar tareas desde el localStorage
  let tareas = cargarTareasDesdeLocalStorage();

  // Mostrar tareas guardadas en el DOM
  tareas.forEach(tarea => agregarElementoAlDOM(tarea));

  // Solo muestra una tarea en el DOM
  function agregarElementoAlDOM(tarea) {
    const elemento = `
      <li class="elemento">
        <input type="checkbox" class="check" data-estado="terminado">
        <p class="text line-through">${tarea}</p>
        <button class="btnBorrarTarea" data-accion="eliminado">eliminar tarea</button>
      </li>`;
    lista.insertAdjacentHTML("beforeend", elemento);
  }

  // Agregar tarea nueva al array y al DOM, luego guardar en el localStorage
  function agregarTarea(tarea) {
    tareas.push(tarea);
    guardarTareasEnLocalStorage(tareas);
    agregarElementoAlDOM(tarea);
    inputTarea.focus();
  }

  // Manejo del input por click o enter
  function manejarAgregarTarea(event) {
    if (event.type === 'click' || (event.type === 'keyup' && event.key === 'Enter')) {
      const tarea = inputTarea.value.trim();
      if (tarea) {
        agregarTarea(tarea);
      } else {
        alert('Por favor ingrese una tarea');
      }
      inputTarea.value = '';
    }
  }

  btnAgregarTarea.addEventListener('click', manejarAgregarTarea);
  document.addEventListener('keyup', manejarAgregarTarea);

  // Eliminar tarea del DOM y del array
  lista.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('btnBorrarTarea')) {
      const tareaAEliminar = event.target.parentElement;
      const textoTarea = tareaAEliminar.querySelector('p').textContent.trim();

      // Elimina del DOM
      lista.removeChild(tareaAEliminar);

      // Elimina del array y actualiza el localStorage
      tareas = tareas.filter(tarea => tarea !== textoTarea);
      guardarTareasEnLocalStorage(tareas);
    }
  });
}

  
  