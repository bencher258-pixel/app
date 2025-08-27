import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecVerse from "./components/SecVerse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecVerse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;