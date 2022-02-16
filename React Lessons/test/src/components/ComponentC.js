import React from "react";
import { UserConsumer } from "./userContext";

export const ComponentC = () => {
  return (
    <div>
      <UserConsumer>
        {(userName) => {
          return <div>{userName}</div>;
        }}
      </UserConsumer>
    </div>
  );
};
