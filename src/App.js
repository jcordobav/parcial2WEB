import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login"
import Galery from "./components/Galery/Galery"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Login/>}/>
          <Route path = "/home" element={<Galery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
