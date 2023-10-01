import React from "react";

function Lists(props) {
  return (
    <ul>
      {props.lists.map((list) => <li key={list.ID}>{list.listName}</li>)}
    </ul>
  )
}

export default Lists;