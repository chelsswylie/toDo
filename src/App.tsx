import React from "react";
import { FormPage } from "./pages/formPage";
import { ToDoPage } from "./pages/toDoListPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="navigation_container">
        <p>Route to the pages</p>
      </div>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/ToDo" element={<ToDoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
