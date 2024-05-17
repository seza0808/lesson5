import { Button } from "@mui/material";
import React, { useContext } from "react";
import { productContext } from "../context/ProductContextProvaider";
import { Link } from "react-router-dom";

const TododItem = ({ todoName, todoPhone, todoImg, id }) => {
  const { deleteTodo } = useContext(productContext);

  return (
    <div className="TododItem">
      <div>
        <img width={200} src={todoImg} alt="" />
        <h3>{todoName}</h3>
        <h4>{todoPhone}</h4>
        <Button onClick={() => deleteTodo(id)} variant="outlined" color="error">
          Delete
        </Button>
        <Link to={`/edit/${id}`}>
          <Button variant="contained">Edit</Button>
        </Link>
      </div>
    </div>
  );
};

export default TododItem;
