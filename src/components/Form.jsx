import React from "react";

function buttonDisplay(value, submitButton) {
  if (value === "") {
    submitButton.style.display = "none";
  } else {
    submitButton.style.display = "block";
  }
}

function ChangePageButton(query) {
  window.location.href = `?q=${query}`;
}

const Form = () => {
  const [query, setQuery] = React.useState("");
  const submitButtonRef = React.useRef();

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => {
          e.preventDefault();
          ChangePageButton(query);
        }}
      >
        <label>Quelle est votre jeu vidéo ?</label>
        <input
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
            buttonDisplay(e.target.value, submitButtonRef.current);
          }}
        />
        <p>Votre recherche est : {query}</p>
        <button type="submit" ref={submitButtonRef} id="submit">
          Soumettre
        </button>
      </form>
    </>
  );
};

export default Form;
