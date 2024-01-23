import { SET_TODO_INPUT, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./contants";


export const initState = {
    inputTodo: '',
    listTodo: [],
}

export default function reducer(state, action) {

    const {type, payload} = action;
    

    switch(type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                inputTodo: payload,
            }
        case ADD_TODO:
            return {
                ...state,
                listTodo: [...state.listTodo, payload],
            }
        case UPDATE_TODO:
            const newListTodo = [...state.listTodo];
            newListTodo.fill(payload.value, payload.index, payload.index + 1);


            return {
                ...state,
                listTodo: newListTodo,
            }
        case DELETE_TODO:
            const newList = [...state.listTodo];
            newList.splice(payload, 1);


            return {
                ...state,
                listTodo: newList,
            }
        default:
            return state;
    }
}