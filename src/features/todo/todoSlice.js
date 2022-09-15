import { createSlice } from "@reduxjs/toolkit";

const initTodos = [

  ];
  
  const todoSlice = createSlice({
    name: "todo",
    initialState: initTodos,
    reducers: {
      initData: (state, action) => {
        return action.payload
      },
      addTodo: (state, action) => {
        state.push(action.payload);
      },
      deleteTodo: (state, action) => {
        const id = action.payload; //try to filter the items on this list, if the id is not equal to the id then we dotn return it to the list
        return state.filter((todo) => todo.id !== id); //use filter:  filter TODO.IDS NOT EQUAL TO THE INPUTTED ID 
      },
      toggleTodo: (state, action) => {
        const id = action.payload;
        return state.map((todo) => {
            if(todo.id === id) {
                const updatedTodo = { ...todo, done: !todo.done }; //if id is equal to id we provided
                return updatedTodo;
            }
            return todo;
        });
      },
    },
  });
  
  export const {addTodo, deleteTodo, toggleTodo, initData} = todoSlice.actions;
  export default todoSlice;
  
  
