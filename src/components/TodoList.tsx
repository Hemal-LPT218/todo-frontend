import type { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
  onToggle: (id: number, isCompleted: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 border rounded"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onToggle(todo.id, !todo.isCompleted)}
            />
            <div>
              <span className={todo.isCompleted ? "line-through" : ""}>
                {todo.title}
              </span>
              <p className="text-sm text-gray-500">{todo.description}</p>
            </div>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
