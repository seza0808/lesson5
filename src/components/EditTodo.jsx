import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvaider";
import { useParams } from "react-router-dom";

const EditTodo = () => {
  const { getOneTodo, oneTodo } = useContext(productContext);
  const { id } = useParams();
  useEffect(() => {
    getOneTodo(id);
  }, []);
  console.log(oneTodo);
  return <div></div>;
};
export default EditTodo;
