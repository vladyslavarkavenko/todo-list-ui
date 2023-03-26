import api from "./index";

export const listTodos = () => {
    return api.get("/todos");
}
export const createTodo = ({title}) => {
    return api.post("/todos", {title});
}
export const markTodoCompleted = ({id}) => {
    return api.patch(`/todos/${id}/completed`);
}
export const markTodoUncompleted = ({id}) => {
    return api.patch(`/todos/${id}/uncompleted`);
}
export const deleteTodo = ({id}) => {
    return api.delete(`/todos/${id}`);
}