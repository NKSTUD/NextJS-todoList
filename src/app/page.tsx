
"use client"
import { useState, ChangeEvent } from "react";

interface Todo {
    id: number;
    task: string;
}

export default function Home() {
    const [todo, setTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const addTodo = () => {
        setTodoList(prev => [
            ...prev,
            { id: todoList.length + 1, task: todo }
        ]);
        setTodo("");
    };

    const deleteTodo = (id: number) => {
        setTodoList(prevState => prevState.filter(item => item.id !== id));
    };

    return (
        <main className="flex flex-col justify-center items-center mt-7">
            <h1 className="text-4xl text-center">Todo List</h1>
            <div className="mt-5">
                <input
                    type="text"
                    value={todo}
                    placeholder="Add todo list"
                    className="input input-bordered w-full max-w-xs mb-5"
                    onChange={handleChange}
                />
                {todo && (
                    <button className="btn btn-primary btn-sm" onClick={addTodo}>
                        Add an item
                    </button>
                )}
                <ul className="mt-4">
                    {todoList.map(item => (
                        <li key={item.id} className="text-3xl">
                            {item.task}
                            <button
                                className="text-red-900 text-xl ml-2"
                                onClick={() => deleteTodo(item.id)}
                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
