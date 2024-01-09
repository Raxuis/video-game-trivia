import React from "react";
import Return from "../components/Return";
import { useLocation } from "react-router-dom";
const Answers = () => {
  const location = useLocation();
  const { state } = location || {};
  const questions = state ? state.questions : null;
  const userAnswer = state ? state.answers : null;
  return (
    <>
      <Return />
      if (questions){" "}
      {questions.forEach((question) => {
        question.answer = userAnswer ? userAnswer[question.id] : "";
        console.log(question);
      })}
    </>
  );
};

export default Answers;
