import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvaider";
import TododItem from "./TododItem";
// import TododItem from "./TododItem";

const TodoList = () => {
  const { getTodos, todos } = useContext(productContext);
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div className="tododItem">
      {todos.map((elem) => (
        <TododItem key={elem.id} {...elem} />
      ))}
      dkdkk
    </div>
  );
};

export default TodoList;
