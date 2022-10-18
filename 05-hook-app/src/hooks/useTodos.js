import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = ( initialState = [] ) => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos || [] ));
    }, [ todos ]);
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: "ADD TODO",
            payload: todo,
        };
        dispatchTodo( action );
    }
    
    const handleDeleteTodo = ( id ) => {
        const action = {
            type: "DELETE TODO",
            payload: id,
        };
        dispatchTodo( action );
    }
    
    const handleToggleTodo = ( id ) => {
        const action = {
            type: "TOGGLE TODO",
            payload: id,
        };
        dispatchTodo( action );
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => !todo.done ).length;
    
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount,
        todosCount,
    }
}
