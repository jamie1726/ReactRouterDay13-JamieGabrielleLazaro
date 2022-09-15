import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodoItem } from "../../api/todos";
import { Button } from 'antd';

const TodoItem = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();
    //event handler - delete
    //dispatch()
    const onDelete = () => {
        dispatch(deleteTodo(todo.id));
        deleteTodoItem(todo.id).then((res) => {
            dispatch(deleteTodo(res.data));
        });
    }
    const onToggle = () => {
        console.log("on toggle");
        //toggleTodo(id)
        dispatch(toggleTodo(todo.id));
    };

    return <div>
        <span className="holder">
            <span className={todo.done ? "done" : ""} onClick={onToggle}>
                {todo.text}
            </span>
            <Button onClick={onDelete} style={{ background: "none", border: "none" }} type="primary" danger ghost><p>&times;</p></Button>
        </span>

    </div>
    // return ( //done - toggle/lined  //X sign  //onClick X - it will call onDelete on odoSlice
    //     <div onClick={onToggle}>
    //         <span className={todo.done?"done":""}>{todo.text}</span>     
    //         <span onClick={onDelete}>&times;</span>
    //     </div>
    // )
   
}

export default TodoItem;