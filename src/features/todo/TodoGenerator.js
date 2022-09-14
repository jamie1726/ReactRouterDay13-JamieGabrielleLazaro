import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const TodoGenerator = () => {
    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    const onTodoTextChange = (event) => {
        setTodoText(event.target.value);
    };

    const onAdd = () => {
        dispatch(addTodo(todoText));
        setTodoText("");
    };
    return (
    <div>
        <input 
        type = "text" 
        placeholder="input your todo" 
        value={todoText} 
        onChange={onTodoTextChange}/>
        <button onClick={onAdd}>Add</button>
    </div>
    );
};

export default TodoGenerator;