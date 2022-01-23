//El import hago referencia al archivo js que estamos importando

import './styles.css';

// import {ToDo} from './classes/todo.class';
// import { ToDoList } from './classes/todo-list.class';

import {ToDo, ToDoList} from './classes' // automaticamente hace referencia al index.js
import { crearToDoHtml } from './js/componentes';

export const toDoList = new ToDoList();


// Llamando el metodo crearToDoHtml para enviar los todo al html luego de implementar el localStorage
// la funcion del foreach es llamar la funcion por cada todo
toDoList.todos.forEach(todo => crearToDoHtml(todo));

console.log('todos', toDoList.todos);


//  const tarea = new ToDo('Aprender JavaScript');
//  toDoList.nuevoToDo(tarea);
// console.log(toDoList.todos);
// crearToDoHtml(tarea);
// toDoList.todos[0].imprimirClase();




