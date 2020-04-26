import React from "react";
import "./w3.css";
import UseStickyState from "../src/components/useStickyState.jsx";
import FormButton from "./components/formInput";
import TodoItem from "./components/todoitem";

function App() {
  const [state, setState] = UseStickyState([], "storageName");

  function handleClick(e) {
    e.preventDefault();
    if (e.target.previousElementSibling.value) {
      setState([...state, e.target.previousElementSibling.value])
        e.target.previousElementSibling.value = "";
    }
  }

  return (
    <div className="App">
    <FormButton handleClick = {handleClick} />
    <TodoItem state = {state} setState = {setState} />
    </div>
  );
}
export default App;
