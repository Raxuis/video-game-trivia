import React, { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import LandingText from "./components/LandingText";

function App() {
  /* const [gameInfo, setGameInfo] = useState(null);

  const fetchGame = async (query) => {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean`
      );
      setGameInfo(response.data);
    } catch (error) {
      console.error("Error fetching game:", error);
      setGameInfo(null);
    }
  }; */

  return (
    <>
      <Form />
    </>
  );
}

export default App;
