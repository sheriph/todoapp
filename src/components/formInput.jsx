import React from "react";

const FormButton = ({handleClick}) => (
  <div>
    <div className="w3-panel w3-yellow w3-center">
      <h1>My ToDo App</h1>
    </div>
    <div className="w3-container w3-margin-bottom w3-light-gray" >
      <form>
        <label>
          What would you like to do?
        </label>
        <input
          id = "input"
          className="inputBox w3-input w3-border w3-round"
          type="text"
        />
        <input type="submit" value="Enter" onClick = {handleClick} />
      </form>
    </div>
  </div>
);

export default FormButton;
