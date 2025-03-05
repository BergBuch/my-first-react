import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed}
                onChange={handleTodoClick}/>
            </label>
            {todo.name}
        </div>
    )
}

const TodoList = ({ todos, toggleTodo }) => {
    return todos.map(
        (todo) => (
            <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id}/>
        )
    );
}

export default TodoList