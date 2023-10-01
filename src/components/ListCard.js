// TO-DO: show where to gather/buy each item
function ListCard(props) {
  return (
    <div className="card">
      <div className="header collapsable">{props.list.listName}</div>
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