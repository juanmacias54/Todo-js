import './styles.css';
import {Todo, TodoList} from "./classes";
import {crearTodoHtml} from "./js/componentes";

export const todosList = new TodoList();

todosList.todos.forEach(crearTodoHtml);
//version Corta y Larga
//todosList.todos.forEach(todos, crearTodoHtml(todos));

// const todo = new Todo('Aprender React')
// todosList.nuevoTodo(todo)
// console.log(todosList)