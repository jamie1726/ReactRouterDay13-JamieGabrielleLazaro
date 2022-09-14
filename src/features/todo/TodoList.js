import React from 'react';
import {useSelector} from 'react-redux';
import TodoGroup from './TodoGroup';

const TodoList = () => { //get data from global store
    // const todoList = useSelector((state) => {
    //     console.log(state.TodoList); //log to let you knwo what's inside
    // });
    const todoList = useSelector((state) => state.TodoList);//use selector , parameter=state that has data
    
    console.log(todoList);
    return <TodoGroup todoList={todoList}/>;
}

export default TodoList;