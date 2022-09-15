import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const TodoGenerator = () => {
    const [todoText, setTodoText] = useState("");  //variableTodoText
    const dispatch = useDispatch();

    const onTodoTextChange = (event) => {
        setTodoText(event.target.value);  //will set the value of inputted or added list
    };

    const onAdd = () => {
        dispatch(addTodo(todoText)); //used dispatch to make the set TodoText have an initial value of null ""
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