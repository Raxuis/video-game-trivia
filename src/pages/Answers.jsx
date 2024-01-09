import React, { useState, useEffect } from "react";
import Return from "../components/Return";
import { useLocation } from "react-router-dom";
import convertEntitiesHTML from "../functions/specialChars";

const Answers = () => {
  const location = useLocation();
  const { state } = location || {};
  const questions = state ? state.questions : null;
  const userAnswer = state ? state.answers : null;
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [totalAnswer, setTotalAnswer] = useState(0);
  const [answersRight, setAnswersRight] = useState([]);
  const percentageCorrect = (correctAnswer / totalAnswer) * 100;

  useEffect(() => {
    if (questions) {
      questions.forEach((question, index) => {
        if (
          question.correct_answer.toLowerCase() ===
          userAnswer[index].toLowerCase()
        ) {
          setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + 1);
          setAnswersRight((prevAnswersRight) => [...prevAnswersRight, index]);
        } else {
          setWrongAnswer((prevWrongAnswer) => prevWrongAnswer + 1);
        }
        setTotalAnswer((prevTotalAnswer) => prevTotalAnswer + 1);
      });
    }
  }, [questions, userAnswer]);

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-5 py-6 flex-wrap gap-y-2 sm:px-6 ">
        <Return />
        <h2 className="text-3xl font-bold mt-5">
          {percentageCorrect > 50
            ? "Congratulations! 🎉 You are a master of Trivia! ✅"
            : "Ah sad! 🤕 It'll be better next time! 👍"}
        </h2>
        <div className="flex flex-col gap-y-5 py-5 sm:px-6">
          <h1 className="text-4xl font-bold">Results :</h1>
          <p className="text-2xl">
            Correct Answers :{" "}
            <span className="text-green-500 font-bold"> {correctAnswer}</span>
          </p>
          <p className="text-2xl">
            Wrong Answers :{" "}
            <span className="text-red-500 font-bold">{wrongAnswer}</span>
          </p>
          <p className="text-2xl">
            Total Answers:{" "}
            <span className="text-blue-500 font-bold">{totalAnswer}</span>{" "}
          </p>
          <p className="text-2xl">
            Indexes of your Correct Answers :{" "}
            <span className="text-green-500 font-bold">
              {answersRight.map((index) => index + 1).join(", ")}
            </span>
          </p>
          <p className="text-2xl">The correct answers were : </p>

          {questions.map((question, index) => {
            return (
              <p
                key={index}
                className="text-blue-600 max-lg:w-4/5 pl-8 text-xl"
              >
                <span className="font-bold "> {index + 1}</span> -{" "}
                {convertEntitiesHTML(question.question)} :{" "}
                <span className="text-green-500 font-bold text-lg">
                  {question.correct_answer}
                </span>
              </p>
            );
          })}
          <p className="text-2xl">Your answers were : </p>
          {questions.map((question, index) => {
            const isCorrect =
              question.correct_answer.toLowerCase() ===
              userAnswer[index].toLowerCase();
            return (
              <p
                key={index}
                className={`text-blue-600 max-lg:w-4/5 pl-8 text-xl ${
                  isCorrect ? "text-green-500" : "text-red-500"
                }`}
              >
                <span className="font-bold ">{index + 1}</span> -{" "}
                {convertEntitiesHTML(question.question)} :{" "}
                <span className="text-white font-bold text-lg">
                  {userAnswer[index].charAt(0).toUpperCase() +
                    userAnswer[index].slice(1)}{" "}
                  :{" "}
                  {isCorrect ? (
                    <span className="text-green-500">Correct</span>
                  ) : (
                    <span className="text-red-500">Incorrect</span>
                  )}
                </span>
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Answers;
