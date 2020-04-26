import React from "react";
import "./w3.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [],
    };
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      this.setState({ value: [...this.state.value, e.target.value] });
      e.target.value = "";
    }
  };



  render() {
    return (
      <div className="App">
        <div className="w3-panel w3-yellow w3-center">
          <h1>My ToDo App</h1>
        </div>
        <div className="w3-container w3-margin-bottom w3-light-gray">
          <label> Enter Chores </label>
          <input
            className="inputBox w3-input w3-border w3-round"
            type="text"
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="w3-container cursor">
          {this.state.value.map((item, index) => (
            <div
              className="w3-card-4 w3-yellow w3-padding w3-margin-bottom"
              key={index}
              onClick={(e) => e.target.classList.toggle("strikethrough")}
            >
              {item}

              <span
                className="w3-right"
                onClick={(e) => e.target.parentNode.remove()}
              >
                &times;
              </span>
              <span
                item={item}
                index={index}
                className="w3-right w3-margin-right w3-margin-left"
                onClick={(e) => {
                  document.getElementsByClassName("inputBox")[0].value = item;
                  e.target.parentNode.remove();
                }}
              >
                &#10531;
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
