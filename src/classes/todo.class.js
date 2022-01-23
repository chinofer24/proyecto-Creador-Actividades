
export class ToDo{

    // elemento statico para transformar un objeto luego de utilizar el localStorage a una instancia de la clase y asi poder recuperar los metodos de la clase.

    static fromJson({tarea, id, completado, creado}){

        const tempToDo = new ToDo (tarea);

        tempToDo.id = id;
        tempToDo.completado = completado;
        tempToDo.creado = creado;

        return tempToDo;
    }

    constructor(tarea){

        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
   
}