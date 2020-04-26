import React from "react";


const TodoItem = ({state, setState }) => (
    <div className="w3-container cursor">
        {state.map((item, index) => (
          <div
            className="w3-card-4 w3-yellow w3-padding w3-margin-bottom todoList"
            key={index}
          >
            <span onClick={(e) => e.target.classList.toggle("strikethrough")}>
              {item}
            </span>

            <span
              item={item}
              index={index}
              className="w3-right deleteButton"
              onClick={(e) => {
                state.splice(index, 1);
                window.localStorage.storageName = JSON.stringify(state);
                setState(state);
                window.location.reload();
              }}
            >
              &times;
            </span>
            <span
              item={item}
              index={index}
              className="w3-right w3-margin-right w3-margin-left"
              onClick={(e) => {
                if (document.getElementById("updateForm")) {
                  return false;
                }
                e.target.insertAdjacentHTML(
                  "afterend",
                  `<form id="updateForm">
                    <input type="text" onclick = "event.stopPropagation()" />
                    <input type="submit" value = "Update ToDo" />
                  </form>`
                );
                document.getElementById("updateForm").onclick = function (e) {
                  e.preventDefault();
                  state.splice(index, 1, e.target.form[0].value);
                  window.localStorage.storageName = JSON.stringify(state);
                  setState(state);
                  document.getElementById("updateForm").remove();
                  window.location.reload();
                };
              }}
            >
              &#10531;
            </span>
          </div>
        ))}
      </div>
)

export default TodoItem;