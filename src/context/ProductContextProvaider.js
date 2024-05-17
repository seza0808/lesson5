import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/const";
export const productContext = createContext();
const ProductContextProvaider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [oneTodo, setOneTodo] = useState([]);
  // !CREATE
  const createTodo = async (todo) => {
    await axios.post(API, todo);
  };
  // ! READ
  const getTodos = async () => {
    try {
      const { data } = await axios(API);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
  };
  getTodos();
  // !getOneTodo
  const getOneTodo = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setOneTodo(data);
  };
  const values = {
    createTodo,
    getTodos,
    todos,
    deleteTodo,
    getOneTodo,
    oneTodo,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvaider;
