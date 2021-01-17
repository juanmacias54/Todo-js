import {Todo} from "../classes";
import {todosList} from "../index";

//referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnClear = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorsFilters = document.querySelectorAll('.filtro');


export const crearTodoHtml = (todo) => {
    const insertaHtml =
        `<li   data-id="${todo.id}">
                <div class="view">
                    <input class="toggle" type="checkbox" ${(todo.completo) && "checked"}>
                    <label>${todo.tarea}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
        </li>`

    const div = document.createElement('div');
    div.innerHTML = insertaHtml;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//Eventos

txtInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter' && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todosList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
})

divTodoList.addEventListener('click', (event) => {

    const todoElemento = event.target.parentElement.parentElement
    const todoAtrib = todoElemento.getAttribute('data-id')
    if (event.target.localName === 'input') {
        todoElemento.classList.toggle('completed')
        todosList.marcarCompletado(todoAtrib)
    } else if (event.target.localName === 'button') {
        todosList.eliminarTodo(todoAtrib)
        divTodoList.removeChild(todoElemento)
    }
})

btnClear.addEventListener('click', () => {

    todosList.eliminarCompletados()

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        let element = divTodoList.children[i];

        if (element.classList.contains('completed')) {
            divTodoList.removeChild(element);
        }
    }
})

ulFilters.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro) {return};
    anchorsFilters.forEach(elem => elem.classList.remove('selected'));

    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden')
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case'Pendientes' :
                if (completado) {
                    elemento.classList.add('hidden')
                }
                break;
            case'Completados' :
                if (!completado) {
                    elemento.classList.add('hidden')
                }
                break;
        }

    }
})


