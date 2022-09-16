import React from 'react';
import { useDispatch } from "react-redux";
import { Button } from 'antd';
import { deleteTodo, toggleTodo, editTodo} from './todoSlice';
import "./TodoItem.css";
import { deleteTodoItem, toggleTodoItem, editTodoItem} from '../../api/todos';
import { Modal } from 'antd';
import { useState } from 'react';

const TodoItem = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();
    //event handler - delete
    //dispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [textValue, setTextValue] = useState('');

    const onDelete = () => {
        dispatch(deleteTodo(todo.id));
        deleteTodoItem(todo.id).then((res) => {
            dispatch(deleteTodo(res.data));
        });
        
    }
    const onToggle = () => {
        console.log("on toggle");
        // dispatch(toggleTodo(todo.id));
        toggleTodoItem(todo.id, !todo.done).then((res) => {
            dispatch(toggleTodo(res.data.id));
        })
    };
    ///
    const onEdit = () => {
        //Should open the popup menu
        showModal();
    }

    const showModal = () => { //if showModal is called, setIsModalOpen=true
        setTextValue('');
        setIsModalOpen(true);
      };
    
    const onOkay = () => {
        setIsModalOpen(false); //if onOkay is called, setIsModalOpen=false (closed popup)
        editTodoItem(todo.id , textValue).then((res) => {
            dispatch(editTodo(todo.id , textValue));
            window.location.reload(false);
        });
        
    };
    
    const onCancel = () => {
        setIsModalOpen(false); //if onCancel is called, setIsModalOpen=false (closed popup)
      };
    
    const onTodoChange = (event) => {
        setTextValue(event.target.value);
    };


    return <div>
        <span className="holder">
            <span className={todo.done ? "done" : ""} onClick={onToggle}>
                {todo.text}
            </span>
            <Button onClick={onDelete} style={{ background: "none", border: "none" }} type="primary" danger ghost><p>&times;</p></Button>
                <span onClick={onEdit}>✍🏻</span>
            <Modal title="Edit Todo Item" open={isModalOpen} onOk={onOkay} onCancel={onCancel}>
                <input type="text" placeholder={todo.text} value={textValue} onChange={onTodoChange}/>
            </Modal>
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