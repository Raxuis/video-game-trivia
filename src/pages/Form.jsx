import { useState } from "react";
import LandingText from "../components/LandingText";
import { useNavigate } from "react-router-dom";
import { amountOptions, difficultyOptions } from "../constants";
import { submitAnswers } from "../utils/submitAnswers";

const Form = () => {
  const [amount, setAmount] = useState(5);
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleChange = (setStateFunc, value) => {
    setStateFunc(value);
  };

  const submitButton = async (event) => {
    event.preventDefault(); // preventing form submission
    try {
      const newQuestions = await submitAnswers(amount, difficulty);
      navigate("/questions", {
        state: { questions: newQuestions },
      });
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto max-w-lg sm-w-full p-4 flex flex-col items-center justify-center bg-white rounded-lg shadow-md dark:bg-gray-800">
        <LandingText />
        <form
          className="flex items-center flex-col p-10 gap-3"
          onSubmit={(e) => submitButton(e)}
        >
          <label htmlFor="amount" name="amount">
            Choose how many questions you want :
          </label>
          <select
            name="amount"
            id="amount"
            className="block w-full px-3 py-2 mt-1 text-base text-white-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700"
            onChange={(e) => handleChange(setAmount, e.target.value)}
          >
            {amountOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <label htmlFor="difficulty">Select your difficulty :</label>
          <select
            name="difficulty"
            id="difficulty"
            className="block w-full px-3 py-2 mt-1 text-base text-white-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700"
            onChange={(e) => handleChange(setDifficulty, e.target.value)}
          >
            <option key={"any"} value="">
              Any difficulty
            </option>
            {difficultyOptions.map((value) => (
              <option key={value} value={value}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="block w-full px-3 py-2 mt-4 text-base font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:duration-750 hover:bg-blue-800 focus:ring"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
