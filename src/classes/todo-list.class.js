import { ToDo } from ".";

export class ToDoList {

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoToDo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage(); //implementando el metodo
        console.log(todo.tarea);
    }

    eliminarToDo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for (const todo of this.todos){
            
             //console.log(todo.id, id); 

            if (todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        // devolver los que no esten completados
        this.todos = this.todos.filter(todo => !todo.completado); 
        this.guardarLocalStorage();
    };

    //guardar los elementos todos en el localStorage
    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
        // la instruccion JSON.stringify, convierte el arreglo en un JSON
    };

    // cargar ToDos del localStorage, antes de trabara con el localStorage, se debe verificar si el objeto existe
    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
        ? this.todos = JSON.parse(localStorage.getItem('todo'))
        : this.todos = [];

        this.todos = this.todos.map(obj => ToDo.fromJson(obj));
        
        // Simplificando las instrucciones de abajo

        // if(localStorage.getItem('todo')){

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     // hace el proceso inverso de los datos JSON para pasarlos al objeto original     
            
        //     console.log('cargarlocal: ', this.todos);
        //     console.log(typeof this.todos);

        // } else {
        //     this.todos = [];
        // }

        
    };

}