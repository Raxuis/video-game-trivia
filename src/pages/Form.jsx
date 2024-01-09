import React from "react";
import LandingText from "../components/LandingText";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [amount, setAmount] = React.useState(5);
  const [difficulty, setDifficulty] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (setStateFunc, value) => {
    setStateFunc(value);
  };

  const submitButton = async (event) => {
    event.preventDefault();
    const url = `https://opentdb.com/api.php?amount=${amount}&category=15&difficulty=${difficulty}&type=boolean`;

    try {
      const response = await axios.get(url);
      const newQuestions = response.data.results;
      console.log("New Questions:", newQuestions);
      navigate("/questions", { state: { questions: newQuestions } });
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <div className="mx-auto mt-5 max-w-lg sm-w-full px-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <LandingText />
      <form
        className="flex items-center flex-col p-10 gap-3"
        onSubmit={(e) => submitButton(e)}
      >
        <label htmlFor="amount" name="amount">
          Choisissez combien de questions vous souhaitez :
        </label>
        <select
          name="amount"
          id="amount"
          className="block w-full px-3 py-2 mt-1 text-base text-white-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700"
          onChange={(e) => handleChange(setAmount, e.target.value)}
        >
          {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <label htmlFor="difficulty">Sélectionnez votre difficulté :</label>
        <select
          name="difficulty"
          id="difficulty"
          className="block w-full px-3 py-2 mt-1 text-base text-white-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700"
          onChange={(e) => handleChange(setDifficulty, e.target.value)}
        >
          <option
            key={"any"}
            value={
              Math.random() < 0.33
                ? "facile"
                : Math.random() < 0.66
                ? "moyen"
                : "difficile"
            }
          >
            N'importe quelle difficulté
          </option>
          {["facile", "moyen", "difficile"].map((value) => (
            <option key={value} value={value}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="block w-full px-3 py-2 mt-4 text-base font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:duration-750 hover:bg-blue-800  focus:ring"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default Form;
