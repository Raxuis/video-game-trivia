import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Questions from "./pages/Questions";
import "./index.css";
import Form from "./pages/Form";
import Answers from "./pages/Answers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answers" element={<Answers />} />
      </Routes>
    </Router>
  );
};

export default App;
