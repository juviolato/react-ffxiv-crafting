import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Popup from "reactjs-popup";
import Select from "react-select";

function ItemList(props) {
  const [selectedList, setSelectedList] = useState("");
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
                    props.onClickItem(selectedList, item.ID);
                    close();
                  }}
                >Add to list</button>
              </div>
            </div>
          )}
        </Popup>
      )}
    </ul>
  );
}

export default ItemList;