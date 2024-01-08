import "./App.css";
import Form from "./components/Form";

function QueryApi() {
  const fetchGame = async () => {
    const response = await fetch(`/api/games?q=${query}`);
    const data = await response.json();
  };
}
function App() {
  return (
    <>
      <Form />
    </>
  );
}

export default App;
