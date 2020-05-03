import React from "react";
import "../../src/w3.css"


const FormInput = ({value, handleChange, handleSubmit  })=> (
    <div className="w3-container">
    <form
      className="w3-container w3-margin-top"
      onSubmit={handleSubmit}
    >
      <label>Enter to do events</label>
      <input
        className="w3-input w3-border w3-light-grey"
        type="text"
        name="todo"
        value={value}
        onChange={handleChange}
      />
      <input
        className="w3-buton w3-circle w3-black"
        value="+"
        type="submit"
        name="submit"
      />
    </form>
  </div>
)

export default FormInput;