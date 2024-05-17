import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvaider";

const AddTodo = () => {
  const { createTodo } = useContext(productContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const handleClick = () => {
    if (!name.trim() || !phone.trim() || !img.trim()) {
      console.log("Введите данные во все инпуты");
      return;
    }
    let todo = {
      todoName: name,
      todoPhone: phone,
      todoImg: img,
    };
    createTodo(todo);
  };
  return (
    //!onChange принимает колбек функцию
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        defaultValue={name}
      />

      <TextField
        onChange={(e) => setPhone(e.target.value)}
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        defaultValue={phone}
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="outlined-basic"
        label="Img"
        variant="outlined"
        defaultValue={img}
      />
      <Button onClick={handleClick} variant="contained">
        Contained
      </Button>
    </div>
  );
};

export default AddTodo;
