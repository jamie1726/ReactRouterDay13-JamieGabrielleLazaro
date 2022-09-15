import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../features/todo/todoSlice';

const store = configureStore({
    reducer: {
      todoList: todoSlice.reducer,  //where we store todolist from slice
    },
  });

  export default store;