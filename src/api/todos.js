import axios from  "axios";

const api = axios.create({
    baseURL: "https://6322c3bb362b0d4e7dd2c36a.mockapi.io/api/", //we imported website todos from https://mockapi.io/projects/6322c3bb362b0d4e7dd2c36b
});

//GET https://6322c42ba624bced307e1d94.mockapi.io/api/todos/
export function getTodoList(){
    return api.get("/todos");
}

//POST https://6322c42ba624bced307e1d94.mockapi.io/api/todos/
export function addTodoItem(data){
    return api.post("/todos", data);
}

// DELETE https://6322c42ba624bced307e1d94.mockapi.io/api/todos/$id
export function deleteTodoItem(id){
    console.log(id);
    return api.delete(`/todos/${id}`);
}

// TOGGLE https://6322c3bb362b0d4e7dd2c36a.mockapi.io/api/$id
export function toggleTodoItem(id, done){
    return api.put(`/todos/${id}`, { "done": done });
}

