function ItemCard(props) {
  return (
    <div className="itemCard displayText">
          <div className="itemName">{props.item.Name_en}</div>
          <div className="itemCategory">{props.item.ItemUICategory.Name_en}</div>
    </div>
  )
}

export default ItemCard;