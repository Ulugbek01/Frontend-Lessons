import React from "react";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  //   const history = useHistory();
  console.log(location, "loc");
  //   console.log(history, "his");
  return <div>Home</div>;
};
