import React, { useContext, useState } from "react";
import { MahsuotlarContext } from "./context";

export const Mahsuot = () => {
  const [data, setData] = useContext(MahsuotlarContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const onDelete = (id) => {
    let newData = data.filter((value) => value.id !== id);
    setData(newData);
  };

  const getName = ({ target }) => {
    setName(target.value);
  };

  const getSurname = ({ target }) => {
    setSurname(target.value);
  };

  const onAdd = () => {
    // console.log(Boolean(name && surname));
    if (name && surname) {
      let newData = {
        id: data.length + 1,
        title: name,
        path: surname,
      };
      setData([...data, newData]);
    } else {
      alert("Janob iltimos malumot kiriting");
    }
  };

  return (
    <div>
      <input placeholder="name" onChange={getName} />
      <input placeholder="surname" onChange={getSurname} />
      <button onClick={onAdd}>add</button>
      <h4>Name: {name}</h4>
      <h4>Surname: {surname}</h4>
      {data.map((value, index) => (
        <div
          key={value.id}
          style={{
            display: "flex",
            padding: "10px",
            backgroundColor: "green",
            marginTop: "5px",
          }}
        >
          <p style={{ marginRight: "20px" }}>{index + 1}</p>
          <p style={{ marginRight: "20px" }}>{value.path}</p>
          <p style={{ marginRight: "20px" }}>{value.title}</p>
          <button onClick={() => onDelete(value.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
