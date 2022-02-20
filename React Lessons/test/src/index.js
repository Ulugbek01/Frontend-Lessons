import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context";
import { Mijozlar } from "./components/Mijozlar";
import { App2 } from "./App2";
import { REST_API } from "./REST_API";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter> */}
    {/* <Mijozlar /> <br /> */}
    {/* <Context>
      <App />
    </Context> */}
    {/* <App2 /> */}
    <REST_API />
  </React.StrictMode>,
  document.getElementById("root")
);
