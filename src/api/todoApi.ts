import axios from "axios";
import type { Todo } from "../types/todo";

const API_URL = `${import.meta.env.VITE_API_URL}/todos`; // change to your API

export const getTodos = async (): Promise<Todo[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addTodo = async (title: string): Promise<Todo> => {
  const res = await axios.post(API_URL, { title, completed: false });
  return res.data;
};

export const updateTodo = async (id: number, completed: boolean): Promise<Todo> => {
  const res = await axios.put(`${API_URL}/${id}`, { completed });
  return res.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
