
import axios from "axios";

const api = axios.create ({
    baseURL: "https://6322c3bb362b0d4e7dd2c36a.mockapi.io/api/"  //we imported website todos from https://mockapi.io/projects/6322c3bb362b0d4e7dd2c36b
});

export function getTodoList(){
    return api.get("/todos");
}
////
export function deleteATodo(id){
    return api.get("/todos" + id);
}