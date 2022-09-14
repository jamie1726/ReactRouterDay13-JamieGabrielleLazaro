import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore, createSlice}  from "@reduxjs/toolkit";

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
];


const todoSlice = createSlice({
  name: "todo",
  initialState: initTodos, 
  reducers: {} , //reduceranother object to do diff operations on data
});
console.log("todoSlice");

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
