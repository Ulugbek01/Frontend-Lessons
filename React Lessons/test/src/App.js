import React from "react";
import { Mahsuot } from "./Mahsuot";
import { Buyurtma } from "./Buyurtma";
import { Search } from "./Search";

export const App = () => {
  return (
    <div>
      <Search />
      <Buyurtma />
      <Mahsuot />
    </div>
  );
};
