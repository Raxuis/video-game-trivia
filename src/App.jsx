import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Questions from "./pages/Questions";
import "./index.css";
import Form from "./pages/Form";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/questions" element={<Questions />} />
        {/* ... etc. */}
      </Routes>
    </Router>
  );
};

export default App;
