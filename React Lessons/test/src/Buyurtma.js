import React, { useContext } from "react";
import { MahsuotlarContext } from "./context";

export const Buyurtma = () => {
  const [value] = useContext(MahsuotlarContext);
  return <div>Buyurtma {value.length}</div>;
};
