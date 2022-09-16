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
      editTodo: (state, action) => {
        const id = action.payload;
        return state.map((todo) => todo.id === id ?
            { ...todo, text: action.payload.text} 
            : todo);
      }

      
    },
  });
  
  export const {addTodo, deleteTodo, toggleTodo, initData, editTodo} = todoSlice.actions;
  export default todoSlice;
  
  
  // import { createSlice } from "@reduxjs/toolkit";

// const initTodos = [
//     {
//       id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
//       text: "todo example",
//       done: false,
//     },
//     {
//       id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
//       text: "first todo item",
//       done: false,
//     },
//   ]
  
//   const todoSlice = createSlice({
//     name: "todo",  //name-used generate teh action, name-required for todo slice
//     initialState: initTodos,
//     reducers: {
//       initData: (state, action) => {  //
//         state = action.payload
//         return state
//       },
//       addTodo: (state, action) => {
//         const todoText = action.payload;
//         const todo = {
//           text: todoText,
//           done: false,
//         }
//         state.push(todo);
//       },
      
//       //delete Todo
//       deleteTodo: (state, action) => {
//         const id = action.payload; //try to filter the items on this list, if the id is not equal to the id then we dotn return it to the list
//         return state.filter((todo) => todo.id !== id)//use filter:  filter TODO.IDS NOT EQUAL TO THE INPUTTED ID 
//           //if not equal to id then we dont want it on the resutl array
//       },

//       toggleTodo: (state, action) => {
//         const id = action.payload; 
//         return state.map(todo => 
//           todo.id === id ? {...todo, done: !todo.done} : todo   //if id is equal to id we provided
//         );                  //^new object
//         //change the "todo"
//         // return state.map(todo => 
//         //   If (todo.id === id){
//         //   const updatedTogo = todo;
//         //   return updated Todo
//         // }
//         //   return todo;
//       }
//     },
//   });
//   //todo/addTodo

//   export const {addTodo,deleteTodo,toggleTodo,initData} = todoSlice.actions;
//   export default todoSlice;