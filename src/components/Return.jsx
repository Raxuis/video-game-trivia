import React from "react";

import { Link } from "react-router-dom";
const Return = () => {
  return (
    <>
      <p className="mt-2 text-lg">
        You can return to the homepage using the button below.
      </p>
      <Link to="/" className="mt-4 text-blue-500 hover:text-blue-300">
        Back to Home
      </Link>
    </>
  );
};

export default Return;
