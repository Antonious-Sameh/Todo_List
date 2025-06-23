import React, { useRef, useState } from 'react';

const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    const handleAddTodo = () => {
        const text = inputRef.current.value.trim();
        if (!text) return;
        const newItem = { completed: false, text };
        setTodos([...todos, newItem]);
        inputRef.current.value = "";
    };

    const handleItemDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleDeleteItem = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <h2>📝 To-Do List</h2>
            <div className="to-do-container">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {todos.map(({ text, completed }, index) => (
                        <div className="item" key={index}>
                            <li
                                className={completed ? "done" : ""}
                                onClick={() => handleItemDone(index)}
                                style={{ flex: 1, fontSize: "20px", cursor: "pointer" }}
                            >
                                {text}
                            </li>
                            <span onClick={() => handleDeleteItem(index)} className="trash" style={{ fontSize: "24px" }}>
                                ❌
                            </span>
                        </div>
                    ))}
                </ul>
                <input ref={inputRef} placeholder="✍️ Add new task..." />
                <button onClick={handleAddTodo}>➕ Add</button>
            </div>
        </div>
    );
};

export default TodoForm;
