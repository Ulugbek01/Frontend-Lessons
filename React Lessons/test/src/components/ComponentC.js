import React from "react";
import { UserConsumer } from "./userContext";

export const ComponentC = () => {
  return (
    <div>
      <UserConsumer>{(userName) => <div>{userName}</div>}</UserConsumer> /*
      Context dan kelgan malumotni qabul qilib olayapmiz */
    </div>
  );
};
