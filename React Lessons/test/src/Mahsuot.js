import React, { useContext } from "react";
import { MahsuotlarContext } from "./context";

export const Mahsuot = () => {
  const [data, setData] = useContext(MahsuotlarContext);

  const onDelete = (id) => {
    let newData = data.filter((value) => value.id !== id);
    setData(newData);
  };

  return (
    <div>
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
