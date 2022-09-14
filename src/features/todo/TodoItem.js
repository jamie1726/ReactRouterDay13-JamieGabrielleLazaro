import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./todoSlice";
import "./TodoItem.css";

const TodoItem = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();
    //event handler - delete
    //dispatch()
    const onDelete = () => {
        console.log("on delete");
        dispatch(deleteTodo(todo.id));
    }; //method
    const onToggle = () => {
        console.log("on toggle");
        //toggleTodo(id)
        dispatch(toggleTodo(todo.id));
    };
    return ( //done - toggle/lined
        <div onClick={onToggle}>
            <span className={todo.done?"done":""}>{todo.text}</span>     
            <span onClick={onDelete}>&times;</span>
        </div>
    )
   
}

export default TodoItem;