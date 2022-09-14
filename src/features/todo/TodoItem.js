import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";

const TodoItem = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();
    //event handler - delete
    //dispatch()
    const onDelete = () => {
        console.log("on delete");
        dispatch(deleteTodo(todo.id));
    }; //method
    
    return (
        <div>
            <span>{todo.text}</span>
            <span onClick={onDelete}>&times;</span>
        </div>
    )
    
}

export default TodoItem;