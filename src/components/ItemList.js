import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Popup from "reactjs-popup";
import Select from "react-select";

function ItemList(props) {
  const [selectedList, setSelectedList] = useState(-1);
  const listOptions = props.availableLists.map((list) => ({ ID: list.ID, label: list.listName }));

  const handleChangeOption = (selectedOption) => {
    setSelectedList(selectedOption.ID)
  }

  // TO-DO: add drag and drop option
  // TO-DO: clear error messages when a new popup is opened
  return (
    <ul>
      {props.items.map((item) => 
        <Popup trigger={
          <li key={item.ID}>
            <ItemCard item={item} />
          </li>
        } modal nested>
          {close => (
            <div className="card popup">
              <div className="header">{item.Name_en}</div>
              <div className="popupContent">
                {props.noListsError && (
                  <div className="errorMessage">No crafting list has been created.</div>
                )}
                {props.duplicateItemError && (
                  <div className="errorMessage">This item is already in the selected list.</div>
                )}
                <Select
                  className="selectField"
                  options={listOptions}
                  isSearchable="true"
                  onChange={handleChangeOption}
                />
              </div>
              <div className="actionButtons">
                <button
                  className="confirmButton"
                  onClick={() => {
                    props.onClickItem(selectedList, item.ID, close);
                  }}
                >Add to list</button>
                <button
                  className="cancelButton"
                  onClick={() => {
                    close();
                  }}
                >Cancel</button>
              </div>
            </div>
          )}
        </Popup>
      )}
    </ul>
  );
}

export default ItemList;