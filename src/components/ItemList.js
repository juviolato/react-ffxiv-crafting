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
  return (
    <ul>
      {props.items.map((item) => 
        <Popup trigger={
          <li key={item.ID}>
            <ItemCard item={item} />
          </li>
        } modal nested>
          {close => (
            <div className="card">
              <div className="header">{item.Name_en}</div>
              {props.noListsError && (
                <div className="errorMessage">No crafting list has been created.</div>
              )}
              {props.duplicateItemError && (
                <div className="errorMessage">This item is already in the selected list.</div>
              )}
              <div className="cardContent">
                <Select
                  className="allowOverflow"
                  options={listOptions}
                  isSearchable="true"
                  onChange={handleChangeOption}
                />
              </div>
              <div className="popupActions">
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