import React from "react";
import ItemCard from "./ItemCard";

function ItemList(props) {
  return (
    <ul>
      {props.items.map((item) => 
        <li key={item.ID} onClick={() => props.onClickItem(item.ID)}>
          <ItemCard item={item} />
        </li>
      )}
    </ul>
  );
}

export default ItemList;