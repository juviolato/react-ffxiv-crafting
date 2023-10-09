import React, { useState } from "react";
import { FiCheck, FiX, FiEdit, FiTrash2 } from "react-icons/fi";
import Popup from "reactjs-popup";

// TO-DO: show where to gather/buy each item
// TO-DO: refactor popups
function ListCard(props) {
  const [newListName, setNewListName] = useState("");

  const handleChangeInput = (listName) => {
    listName.preventDefault();
    setNewListName(listName.target.value);
  }

  // TO-DO: make lists collapsable
  return (
    <div className="card">
      <div className="header hbox collapsable">
        {props.list.listName}
        <div className="actionButtons hbox">
          <button 
            className="listButton"
            onClick={() => {
              props.onDeleteList(props.list.ID);
            }}
          >
            <FiTrash2 />
          </button>
          <Popup trigger={
            <button className="listButton"><FiEdit /></button>
          } modal nested>
            {close => {
              setNewListName("");
              return (
                <div className="card popup">
                  <div className="header">Edit {props.list.listName}'s name</div>
                  <div className="popupContent">
                    <div className="hbox">
                      <input
                        className="inputField"
                        type="text"
                        placeholder="New list name"
                        onChange={handleChangeInput}
                        value={newListName}
                      />
                      <div className="actionButtons hbox">
                        <button
                          onClick={() => {
                            props.onDeleteList(props.list.ID);
                            close();
                          }}
                        ><FiX /></button>
                        <button
                          onClick={() => {
                            props.onEditList(props.list.ID, newListName);
                            close();
                          }}
                        ><FiCheck /></button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          }
          </Popup>
        </div>
      </div>
      <div className="cardContent">
        <div className="collapsable">
          Items
          <ul>{Object.values(props.list.items).map((item) => <li key={item.ID}>{item.Name_en}</li>)}</ul>
        </div>
      </div>
    </div>
  )
}

export default ListCard;