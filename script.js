/*Se declaran en variables los elementos que vamos a manejar del html*/
const fecha = document.querySelector('#fecha')
const inputNombre = document.querySelector('#inputNombre')
const btnAgregarNombre = document.querySelector('#btnNombre')
const saludoNombre = document.querySelector('#saludoNombre')
const bienvenida = document.querySelector('#bienvenida')
const lista = document.querySelector('#lista')
const inputTarea = document.querySelector('#inputTarea')
const btnAgregarTarea = document.querySelector('#btnAgregar')



/*Agrega el nombre del usuario en el mensaje*/

function agregarNombre (nombre) {
  return `Hola, ${nombre}! Bienvenido a tus tareas`
}


btnAgregarNombre.addEventListener('click',()=>{
  //se declara la variable donde se guardara el input
  //y se verifica si el nombre contiene un valor y de ser espacios
  const nombre = inputNombre.value.trim()
  if(nombre){
    saludoNombre.textContent = agregarNombre(nombre)
    inputNombre.classList.add('oculto');  /*oculta el input luego de poner el nombre*/
    btnAgregarNombre.classList.add('oculto'); /*oculta el boton luego de agregar el nombre*/
    bienvenida.classList.add('oculto'); /*oculta el mensaje de bienvenida por default*/
  } else {
    // se envia un alert por defecto
    alert('Por favor ingrese su nombre')
  }
  
  
})


//agrega la tarea del usuario
function agregarTarea (tarea) {
  //se agrega la variable elemento con el valor del p tarea
  const elemento = `<li class="elemento">
  <input type="checkbox" class="check" data-estado="terminado">
  <p class="text line-through">${tarea}</p>
  <button class="btnBorrarTarea" class="input" data-accion="eliminado">eliminar tarea</button>
  </li>
  `
  //agregando el li a la logica html al final beforeend de la lista
    lista.insertAdjacentHTML("beforeend",elemento) 
    inputTarea.focus();
}

/* Unificar agregar tarea con click y enter */
function manejarAgregarTarea(event) {
  // Verificar si el evento es un clic o si la tecla presionada es Enter
  if (event.type === 'click' || (event.type === 'keyup' && event.key === 'Enter')) {
    const tarea = inputTarea.value.trim();
    if (tarea) {
      agregarTarea(tarea);
    } else {
      alert('Por favor ingrese una tarea');
    }
    // Regresa el input vacío
    inputTarea.value = '';
  }
}

// Asignar el evento al botón y al documento
btnAgregarTarea.addEventListener('click', manejarAgregarTarea);
document.addEventListener('keyup', manejarAgregarTarea);

/*boton de eliminar*/

// Escuchar clicks dentro de la lista
lista.addEventListener('click', (event) => {
  // Verificar si el elemento clicado es un botón de eliminar tarea
  // y eliminar el elemento padre (li) de la lista
  if (event.target && event.target.classList.contains('btnBorrarTarea')) {
    const tareaAEliminar = event.target.parentElement;
    // Se elimina el elemento de la lista
    lista.removeChild(tareaAEliminar); 
  }
});

//fecha
const date = new Date();

fecha.innerHTML = date.toLocaleDateString('es-co',{weekday:'long', month: 'short', day:'numeric'})

