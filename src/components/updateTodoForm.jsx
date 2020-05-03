import React from "react";
import "../../src/w3.css"

const UpdateTodo = ({
  item,
  index,
  updateValue,
  arrayValue,
  showOrHide,
  handleChangeUpdate,
  handleChangeSubmit,
  hideModal,
}) => (
  <div>
    <div className={showOrHide ? "w3-modal" : ""}>
      <div className="w3-modal-content modalpop w3-card-4 w3-animate-zoom">
        <div className="w3-center">
          <br />
          <span
            onClick={hideModal}
            className="w3-button w3-xlarge w3-hover-red w3-display-topright"
          >
            &times;
          </span>
        </div>
        <p className="w3-center">Update Todo</p>
        <form
          item={item}
          index={index}
          className="w3-container"
          onSubmit={handleChangeSubmit}
        >
          <input
            className="w3-input w3-border"
            type="text"
            name="todo"
            value={updateValue}
            onChange={handleChangeUpdate}
          />
          <input
            className="w3-button w3-blue w3-hover-blue-gray fullbutton"
            type="submit"
            value="Update"
            name="submit"
          />
        </form>
      </div>
    </div>
  </div>
);

export default UpdateTodo;
