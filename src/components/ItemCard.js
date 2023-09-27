import "../css/style.css";

function ItemCard(props) {
  return (
    <div className="itemCard">
          <div className="itemName">{props.item.Name_en}</div>
          <div className="itemCategory">{props.item.ItemUICategory.Name_en}</div>
    </div>
  )
}

export default ItemCard;