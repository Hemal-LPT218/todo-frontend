import axios from "axios";
import type { Todo } from "../types/todo";

const API_URL = `${import.meta.env.VITE_API_URL}/todos`; // change to your API

export const getTodos = async (): Promise<{ data: Todo[] }> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addTodo = async (
  title: string,
  description: string
): Promise<Todo> => {
  const res = await axios.post(API_URL, {
    title,
    isCompleted: false,
    description,
  });
  return res.data;
};

export const updateTodo = async (
  id: number,
  isCompleted: boolean
): Promise<Todo> => {
  const res = await axios.patch(`${API_URL}/${id}`, { isCompleted });
  return res.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
