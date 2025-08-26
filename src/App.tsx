import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api/todoApi";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const data = await getTodos();
      setTodos(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (title: string, description: string) => {
    const newTodo = await addTodo(title, description);
    setTodos([...todos, newTodo]);
  };

  const handleToggle = async (id: number, isCompleted: boolean) => {
    const updated = await updateTodo(id, isCompleted);
    setTodos(todos.map((t) => (t.id === id ? updated : t)));
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
