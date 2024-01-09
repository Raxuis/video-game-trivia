import React from "react";
import { Link, useLocation } from "react-router-dom";

function convertEntitiesHTML(texte) {
  const entitiesHTML = {
    "&quot;": '"',
    "&apos;": "'",
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&nbsp;": " ",
    "&ndash;": "-",
    "&#039;": "'",
  };

  return texte.replace(/&[a-zA-Z]+;/g, (entity) => {
    return entitiesHTML[entity] || entity;
  });
}

const Questions = () => {
  const location = useLocation();
  const { state } = location || {};
  const questions = state ? state.questions : null;

  return (
    <>
      <form
        className="flex flex-col items-center justify-center pt-5 sm:px-6"
        onSubmit={(e) => submitButton(e)}
      >
        <h1 className="text-6xl font-bold">Welcome to the Questions page.</h1>
        <p className="mt-2 text-lg">
          You can return to the home page using the button below.
        </p>
        <Link to="/" className="mt-4 text-blue-500 hover:text-blue-300">
          Back to Home
        </Link>
      </form>
      <form className="flex flex-col items-center justify-center py-5 sm:px-6">
        <h1 className="text-4xl font-bold">Questions:</h1>
        {questions && questions.length > 0 ? (
          <ul className="pt-5">
            {questions.map((question, index) => (
              <div key={index} className="pt-5">
                <li>
                  {index + 1 + " :"}{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: convertEntitiesHTML(question.question),
                    }}
                  />
                </li>
                <li className="flex flex-col gap-3">
                  <label htmlFor={`answer-${index}`}>Answer:</label>
                  <div className="flex gap-2">
                    <label htmlFor={`true-${index}`}>True</label>
                    <input
                      type="radio"
                      id={`true-${index}`}
                      name={`answer-${index}`}
                      value="true"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor={`false-${index}`}>False</label>
                    <input
                      type="radio"
                      id={`false-${index}`}
                      name={`answer-${index}`}
                      value="false"
                      className="mt-1"
                    />
                  </div>
                </li>
              </div>
            ))}
          </ul>
        ) : (
          <p>No questions available.</p>
        )}{" "}
        <button
          type="submit"
          className="block w-40 px-3 py-2 mt-4 text-base font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:duration-750 hover:bg-blue-800  focus:ring"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Questions;
