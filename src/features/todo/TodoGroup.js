import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const {todoList} = props;
    return todoList.map((todo) => <TodoItem key = {todo.id} todo = {todo}/>);  //ascending order of items//mAP TO KNOW VALUE ON TODOITEM
};

export default TodoGroup;