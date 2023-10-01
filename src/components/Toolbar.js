import React, { useState } from "react";
import { FiPlus } from "react-icons/fi/";
import Popup from "reactjs-popup";
import "../css/mainPageStyle.css";

function Toolbar(props) {
  const [newListName, setNewListName] = useState("");

  const handleChangeInput = (listName) => {
    listName.preventDefault();
    setNewListName(listName.target.value);
  }

  return (
    <div className="mainPageToolbar pageSection">
      <Popup trigger={
        <button className="pageButton">
          <FiPlus />
          New crafting list
        </button>
      } modal nested>
        {close => (
          <div className="popup">
            <div className="popupHeader pageSection">New crafting list</div>
            <div className="popupContent pageSection">
              <input
                className="inputField"
                type="text"
                placeholder="List name"
                onChange={handleChangeInput}
                value={newListName}
              />
            </div>
            <div className="popupActions">
              <button
                className="confirmButton"
                onClick={() => {
                  props.onConfirmNewList(newListName);
                  close();
                }}
              >Create new list</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Toolbar;