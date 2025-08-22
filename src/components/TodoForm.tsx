import { useState } from "react";

interface Props {
  onAdd: (title: string, description: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !description.trim()) return;
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 border p-2 rounded"
        />
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description..."
          className="flex-1 border p-2 rounded"
        />
      </div>
      <div className="flex justify-center mb-4">
        <button className="bg-blue-500 text-white px-10 py-2 rounded">
          Add
        </button>
      </div>
    </form>
  );
}
