import React, { useState, useMemo } from "react";
import Home from "./Home";

export const App2 = () => {
  const [name, setName] = useState(" ");
  const useName = useMemo(() => name, []);

  console.log("App2 component");
  return (
    <div>
      <h2>Name: {name}</h2>
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <br />
      <Home title="name" obj={useName} />
    </div>
  );
};

/* Agar child componentga prop sifatida object yoki 
array bersak useMemo() dan foydalanamiz */
