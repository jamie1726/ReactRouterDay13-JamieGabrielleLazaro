import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { getTodoList } from "../../api/todos";
import { initData }  from "./todoSlice"

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList);
    console.log(todoList);

    // 1. useEffect when enter page
    // 2. request GET "/todos" to mock api
    // 3. dispatch initData with response
    useEffect(() => {
        getTodoList().then((res) => {
            console.log(res);
            dispatch(initData(res.data))
        })
    }, [dispatch])


    return ( //ShowList ON TodoGroup
        <>
            <TodoGroup todoList={todoList}/> 
            <TodoGenerator/>
        </>
    );
};

export default TodoList;