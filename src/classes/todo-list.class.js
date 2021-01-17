import {Todo} from "./todo.class";



export class TodoList {

    constructor() {
        this.todos = [];
        this.recuperarLocalStorage();
    }

    nuevoTodo(todo) {

        this.todos.push(todo);
        this.guardarLocalStorage();

    };

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado )
        this.guardarLocalStorage();
    };

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    };

    marcarCompletado(id) {

        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break
            }
        }
    };

    guardarLocalStorage(){
       localStorage.setItem('todos',JSON.stringify(this.todos));
    }

    recuperarLocalStorage(){
        (localStorage.getItem('todos'))
            ? this.todos=JSON.parse(localStorage.getItem('todos'))
            :this.todos = [];
        this.todos = this.todos.map(obj =>Todo.fromJson(obj))
    }
}