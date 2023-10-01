function ItemCard(props) {
  return (
    <div className="displayText card itemCard">
      <div className="cardContent">
        <div className="itemName">{props.item.Name_en}</div>
        <div className="subtitle">{props.item.ItemUICategory.Name_en}</div>
      </div>
    </div>
  )
}

export default ItemCard;