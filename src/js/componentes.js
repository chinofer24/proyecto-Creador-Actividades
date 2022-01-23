/**
 * Voy a crear un metodo que me permita crear el ToDo en el html
 */

import { ToDo } from "../classes";
import {toDoList} from "../index";
    
// Referencia en el html
const divToDoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearToDoHtml =( ToDo )=>{
    
    const htmlToDo = `
    <li class=" ${ (ToDo.completado) ? 'completed' : ''}  " data-id="${ToDo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (ToDo.completado) ? 'checked' : '' } >
        <label>${ToDo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    // creando un elemento div que contenga la lista TodoList
    const div = document.createElement('div');
    
    div.innerHTML = htmlToDo;
    
    //insertando el div en el html, con la propiedad firstElementChild que coloca el primer elemento del div
    divToDoList.append(div.firstElementChild);

    return div.firstElementChild;

}

// eventos
// El event me va a decir que tecla fue la que se oprimio
// El keyCode es el codigo de cada tecla. El keyCode 13 es la tecla enter
// El txtInput.value imprime el texto ingresado por teclado

txtInput.addEventListener('keyup', (event)=>{
    
    if(event.keyCode === 13 && txtInput.value.length >0){
       const nuevoToDo = new ToDo(txtInput.value);
       toDoList.nuevoToDo(nuevoToDo); 

       crearToDoHtml(nuevoToDo); // llama al metodo para crearlo en el html
       txtInput.value = ''; // borra el texto de la caja de texto
    
   }
});

//El target me indica el lugar donde hago click
divToDoList.addEventListener('click', (event)=>{

    //console.log(event.target.localName);
    const nombreElemento = event.target.localName; // input, label, boton
    
    // al hacer click me va a devolver la referncia del html
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    
    //console.log(nombreElemento);
    //console.log(todoElemento);
    //console.log(todoId);

    if (nombreElemento.includes('input')){ // click en el check
        toDoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')){
        toDoList.eliminarToDo(todoId);
        divToDoList.removeChild(todoElemento);
    }
    
    // console.log(toDoList);

});

btnBorrar.addEventListener('click', ()=>{

    toDoList.eliminarCompletados();
    
    // For inverso para eliminar los toDo de abajo hacia arriba
    for(let i = divToDoList.children.length-1; i>=0; i--){
        
        const elemento = divToDoList.children[i];
        console.log(elemento);
        
        // verificar se elemento de la lista contiene la clase completed para borrarla
        if(elemento.classList.contains('completed')){
            divToDoList.removeChild(elemento);
        };

    }
    

});

// configurar los botones de Pendientes y Completados para que cada vez que se oprima me regrese los elementos de acuerdo a la opción.

ulFiltros.addEventListener('click', (event)=>{

    const filtro = event.target.text;
    if(!filtro){ return; } // hago el return cuando el filtro sea un undefined

    // coloca el cuadro de seleccion en la opción seleccionada
    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    // console.log(event.target);
    event.target.classList.add('selected')

    for(const elemento of divToDoList.children){
        // console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){
            
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
            break;
        }
    }

});




