import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import EditTodo from "../components/EditTodo";
import TodoDetails from "../components/TodoDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddTodo />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/edit/:id" element={<EditTodo />} />
      <Route path="/details/:id" element={<TodoDetails />} />
      <Route path="/details/:id" element={<TodoDetails />} />
    </Routes>
  );
};

export default MainRoutes;
