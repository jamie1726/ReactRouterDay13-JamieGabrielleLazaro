const TodoItem = (props) => {
    const {todo} = props;
    return <div>{todo.text}</div>;
}

export default TodoItem;