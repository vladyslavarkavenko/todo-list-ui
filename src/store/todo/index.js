import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createSlice} from '@reduxjs/toolkit';

import {getAsyncActionWrapper} from "../../helpers/getAsyncActionWrapper";
import {createTodo, deleteTodo, listTodos, markTodoCompleted, markTodoUncompleted} from "../../api/todo";

// Slice
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        error: null,
        isLoading: false,

        todoMap: {},
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        setTodoItem: (state, action) => {
            const {id, title, completed} = action.payload;

            state.todoMap[id] = {
                id,
                title,
                completed
            };
        },
        delTodoItem: (state, action) => {
            const {id} = action.payload;
            delete state.todoMap[id];
        }
    },
});

// Sync actions
const {setError, setIsLoading, setTodoItem, delTodoItem} = todoSlice.actions;

// Async actions
const asyncActionWrapper = getAsyncActionWrapper({ setIsLoading, setError });

const listTodoItems = asyncActionWrapper(async (_, dispatch) => {
    const {data: todos} = await listTodos();
    todos.forEach(todo => {
        dispatch(setTodoItem(todo));
    })
});
const createTodoItem = asyncActionWrapper(async ({title}, dispatch) => {
    const {data: todo} = await createTodo({title});
    dispatch(setTodoItem(todo));
});
const markTodoItemCompleted = asyncActionWrapper(async ({id}, dispatch) => {
    const {data: todo} = await markTodoCompleted({id});
    dispatch(setTodoItem(todo));
});
const markTodoItemUncompleted = asyncActionWrapper(async ({id}, dispatch) => {
    const {data: todo} = await markTodoUncompleted({id});
    dispatch(setTodoItem(todo));
});
const deleteTodoItem = asyncActionWrapper(async ({id}, dispatch) => {
    await deleteTodo({id});
    dispatch(delTodoItem({id}));
});

export const useTodo = () => {
    const error = useSelector((state) => state.todo.error);
    const isLoading = useSelector((state) => state.todo.isLoading);

    const todoList = useSelector((state) => Object.values(state.todo.todoMap));

    const dispatch = useDispatch();

    useEffect(() => {
        if (!todoList.length) {
            dispatch(listTodoItems());
        }
    }, []);

    return {
        error,
        isLoading,

        todoList,

        createTodoItem: (payload) => dispatch(createTodoItem(payload)),
        markTodoItemCompleted: (payload) => dispatch(markTodoItemCompleted(payload)),
        markTodoItemUncompleted: (payload) => dispatch(markTodoItemUncompleted(payload)),
        deleteTodoItem: (payload) => dispatch(deleteTodoItem(payload)),
    }
};
