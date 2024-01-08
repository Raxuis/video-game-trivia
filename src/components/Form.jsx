import React from "react";
import LandingText from "./LandingText";

const Form = () => {
  const [query, setQuery] = React.useState("");
  const submitButtonRef = React.useRef();

  return (
    <div className="mx-auto mt-5 max-w-lg sm-w-full px-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <LandingText />
      <form className="flex items-center flex-col p-10 gap-3 ">
        {/* <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Video Games"
            required
          ></input>
        </div>
        <button
          type="submit"
          id="submit-button"
          ref={submitButtonRef}
          className={`items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
          ${query ? "inline-flex" : "hidden"}`}
        >
          <svg
            className="mr-2 -ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search
        </button>
      </form>
          <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>*/}
        <label htmlFor="amount" name="amount">
          Choisissez combien de questions vous souhaitez :
        </label>
        <select
          name="amount"
          id="amount"
          className="block w-full px-3 py-2 mt-1 text-base text-white-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700"
        >
          {" "}
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
        </select>
        <label htmlFor="difficulty">Sélectionnez votre difficulté :</label>
        <select
          name="difficulty"
          id="difficulty"
          className="block w-full px-3 py-2 mt-1 text-base text-white-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700"
        >
          {" "}
          <option value="">N'importe quelle difficulté</option>
          <option value="easy">Facile</option>
          <option value="medium">Moyen</option>
          <option value="hard">Difficile</option>
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
