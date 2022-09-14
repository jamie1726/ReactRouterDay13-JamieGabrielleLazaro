import { createSlice } from "@reduxjs/toolkit";

const initTodos = [
    {
      id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
      text: "todo example",
      done: false,
    },
    {
      id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
      text: "first todo item",
      done: false,
    },
  ]
  
  const todoSlice = createSlice({
    name: "todo",  //name-used generate teh action, name-required for todo slice
    initialState: initTodos,
    reducers: {
      addTodo: (state, action) => {
        const todoText = action.payload;
        const todo = {
          id: Date.now(),
          text: todoText,
          done: false,
        }
        state.push(todo);
      },
      
      //delete Todo
      deleteTodo: (state, action) => {
        const id = action.payload; //try to filter the items on this list, if the id is not equal to the id then we dotn return it to the list
        return state.filter((todo) => todo.id !== id)//use filter  
          //if not equal to id then we dont want it on the resutl array
      }
    },
  });
  //todo/addTodo

  export const {addTodo,deleteTodo} = todoSlice.actions;
  export default todoSlice;