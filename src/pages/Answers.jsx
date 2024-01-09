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
      <div className="flex flex-col items-center justify-center py-5 sm:px-6">
        <Return />
        <div>
          <p>Correct Answers: {correctAnswer}</p>
          <p>Wrong Answers: {wrongAnswer}</p>
          <p>Total Answers: {totalAnswer}</p>
          <p>
            Indexes of Correct Answers:{" "}
            {answersRight.map((index) => index + 1).join(", ")}
          </p>
          <p>The correct answers were : </p>
          {questions.map((question, index) => {
            return (
              <p key={index}>
                {index + 1} - {convertEntitiesHTML(question.question)} :{" "}
                {question.correct_answer}
              </p>
            );
          })}
          <p>Your answers were : </p>
          {questions.map((question, index) => {
            return (
              <p key={index}>
                {index + 1} - {convertEntitiesHTML(question.question)} :{" "}
                {userAnswer[index].charAt(0).toUpperCase() +
                  userAnswer[index].slice(1)}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Answers;
