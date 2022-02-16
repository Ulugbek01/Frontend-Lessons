import React from "react";
import { UserProvider } from "./components/userContext";
import { ComponentA } from "./components/ComponentA";

export const App2 = () => {
  return (
    <div>
      <UserProvider value="Ulugbek">
        <ComponentA />
      </UserProvider>
    </div>
  );
};
