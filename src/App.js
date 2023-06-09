import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Galery from "./components/Galery/Galery";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Galery />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    
  );
}

export default App;
