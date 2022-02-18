import React, { useState, useContext } from "react";
import { MahsuotlarContext } from "./context";

export const Search = () => {
  const [data, setData] = useContext(MahsuotlarContext);
  const [list] = useState(data);

  const onSearch = ({ target }) => {
    let newData = list.filter((value) => value.title.includes(target.value));
    setData(newData);
  };

  return (
    <div>
      <input placeholder="search" onChange={onSearch} />
    </div>
  );
};
