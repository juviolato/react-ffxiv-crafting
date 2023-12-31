import React from "react";
import ListCard from "./ListCard";

function Lists(props) {
  return (
    <div className="itemList">
      <ul>
        {props.lists.map((list) => 
          <li key={list.ID}>
            <ListCard 
              list={list}
              onEditList={props.onEditList}
              onDeleteList={props.onDeleteList}
            />
          </li>
        )}
      </ul>
    </div>
  )
}

export default Lists;