import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Return from "../components/Return";
import convertEntitiesHTML from "../functions/specialChars";

const Questions = () => {
  const location = useLocation();
  const { state } = location || {};
  const questions = state ? state.questions : null;
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState({});

  useEffect(() => {
    const initialUserAnswer = {};
    if (questions) {
      questions.forEach((question, index) => {
        initialUserAnswer[index] = "";
      });
      setUserAnswer(initialUserAnswer);
    }
  }, [questions]);

  const submitButton = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/answers", {
      state: { answers: userAnswer, questions: questions },
    });
  };

  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center m-5 sm:px-6">
        <h1 className="text-6xl font-bold">Welcome to the Trivia Game!</h1>
        <Return />
      </div>
      <form
        className="flex flex-col items-center justify-center py-5 mx-5"
        onSubmit={submitButton}
      >
        <h1 className="text-4xl font-bold">Questions :</h1>
        {questions && questions.length > 0 ? (
          <>
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
                    <label htmlFor={`answer-${index}`}>Response :</label>
                    <div className="flex gap-2">
                      <label htmlFor={`true-${index}`}>True</label>
                      <input
                        type="radio"
                        id={`true-${index}`}
                        name={`answer-${index}`}
                        value="true"
                        className="mt-1"
                        onChange={(e) => {
                          setUserAnswer({
                            ...userAnswer,
                            [index]: e.target.value,
                          });
                        }}
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
                        onChange={(e) => {
                          setUserAnswer({
                            ...userAnswer,
                            [index]: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </li>
                </div>
              ))}
            </ul>
            <button
              type="submit"
              className="block w-40 px-3 py-2 mt-4 text-base font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:duration-750 hover:bg-blue-800  focus:ring"
            >
              Submit
            </button>
          </>
        ) : (
          <p>No question available.</p>
        )}
      </form>
    </>
  );
};

export default Questions;
