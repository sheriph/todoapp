/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../../../src/w3.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UpdateTodo from "../../components/updateTodoForm";
import FormInput from "../../components/formInput";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      updateValue: "",
      arrayValue: [],
      startDate: new Date(),
      showOrHide: true,
      index: "",
    };
  }

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value, arrayValue } = this.state;
    if (!value) {
      return;
    }
    this.setState({ arrayValue: [...arrayValue, value] });
    this.setState({ value: "" });
  };

  handleChangeUpdate = (e) => {
    const { value } = e.target;
    this.setState({ updateValue: value });
  };

  handleChangeSubmit = (e) => {
    e.preventDefault();
    const { index, updateValue, arrayValue } = this.state;
    if (!this.state.updateValue) {
      return;
    }
    arrayValue.splice(index, 1, updateValue);
    this.setState({
      arrayValue: arrayValue,
      updateValue: "",
      showOrHide: true,
    });
  };

  hideModal = (e) => {
    this.setState({ showOrHide: true });
  };

  componentWillMount() {
    this.setState({
      arrayValue: JSON.parse(window.localStorage.getItem("todoapp")),
      startDate: new Date(
        JSON.parse(window.localStorage.getItem("todoappdate")) || new Date()
      ),
    });
  }

  render() {
    const {
      value,
      updateValue,
      arrayValue,
      startDate,
      showOrHide,
    } = this.state;

    window.localStorage.setItem("todoapp", JSON.stringify(arrayValue));

    return (
      <div className="w3-container">
        <FormInput
          value={value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        {arrayValue.map((item, index, array) => (
          <div key={index} className="w3-container">
            <div className="w3-card-4 w3-margin-top w3-margin-bottom">
              <div className="w3-container w3-blue">
                <span
                  className="iconright cursor"
                  onClick={(e) =>
                    this.setState({ showOrHide: false, index: index })
                  }
                >
                  &#9997;
                </span>
                <span
                  className="iconright cursor"
                  onClick={(e) => {
                    array.splice(index, 1);
                    this.setState({ arrayValue: array });
                  }}
                >
                  &#9746;
                </span>
              </div>
              <div className="w3-container w3-margin-top w3-margin-bottom">
                {item}
              </div>
              <div className="w3-container w3-yellow">
                <DatePicker
                  className="w3-input w3-animate-input w3-yellow cursor"
                  selected={startDate}
                  onChange={(date) => {
                    this.setState({ startDate: date });
                    window.localStorage.setItem(
                      "todoappdate",
                      JSON.stringify(date)
                    );
                  }}
                  showTimeSelect
                  timeFormat="HH:mm"
                  injectTimes={[]}
                  dateFormat={`@ h:mm aa MMMM d, yyyy`}
                  withPortal
                />
              </div>

              <UpdateTodo
                hideModal={this.hideModal}
                handleChangeSubmit={this.handleChangeSubmit}
                handleChangeUpdate={this.handleChangeUpdate}
                showOrHide={showOrHide}
                item={item}
                index={index}
                updateValue={updateValue}
                arrayValue={arrayValue}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;
