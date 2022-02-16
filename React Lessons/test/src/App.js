import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import { ComponentA } from "./components/ComponentA";
import { Sidebar } from "./components/Sidebar";
import { sidebar } from "./utils/sidebar";
function App() {
  const [sidebarInfo, setSidebar] = useState(sidebar);
  console.log(sidebar.length);
  return (
    <div>
      <div className="app">
        <BrowserRouter>
          <Sidebar />
          {sidebarInfo.map(({ id, title, path, element: Element }) => (
            <div key={id}>
              <Routes>
                <Route key={id} path={path} element={<Element />} />
                {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
              </Routes>
            </div>
          ))}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
