import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const {todoList} = props;
    return todoList.map((todo) => <TodoItem key = {todo.id} todo = {todo}/>);
};

export default TodoGroup;