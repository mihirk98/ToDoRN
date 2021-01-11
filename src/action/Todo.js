import {TODO_ADD, TODO_TOGGLE} from '../Constants';

let nextTodoId = 0;

export const addTodo = (content) => {
    return {
        type: TODO_ADD,
        id: nextTodoId++,
        content: content,
        complete: false
    }
}

export const toggleTodo = (id) => {
    return {
        type: TODO_TOGGLE,
        id: id
    }
}