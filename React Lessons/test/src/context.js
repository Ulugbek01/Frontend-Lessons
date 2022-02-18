import React, { createContext, useState } from "react";
import { sidebar } from "./utils/sidebar";
export const MahsuotlarContext = createContext();

export const Context = ({ children }) => {
  //   console.log(children);
  const [data, setData] = useState(sidebar);
  return (
    <MahsuotlarContext.Provider value={[data, setData]}>
      <div>{children}</div>
    </MahsuotlarContext.Provider>
  );
};
