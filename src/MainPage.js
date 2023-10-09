import React, { Fragment, useState } from "react";

import SideMenu from "./SideMenu";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Lists from "./components/Lists";

import Items from "./mockAPI/Items.json";
import Recipes from "./mockAPI/Recipes.json";
// TO-DO clean up css styles

function MainPage() {
  const [searchInput, setSearchInput] = useState("");
  const [craftingLists, setCraftingLists] = useState([]);
  const [duplicateItemError, setDuplicateItemError] = useState(false);
  const itemsList = Object.values(Items[0]).filter((item) => {
    return item.Name_en.toLowerCase().match(searchInput.toLowerCase())
  });
  const noListsError = craftingLists.length === 0;
  
  const handleItemSearch = (searchTerm) => {
    searchTerm.preventDefault();
    setSearchInput(searchTerm.target.value);
  }

  // TO-DO: allow multiple of one item per list
  // TO-DO: add fading error pop-up for no list selected
  // TO-DO: provide a way to sort items
  const handleAddItemToList = (listID, itemID, closePopup) => {
    if (listID < 0) {
      return;
    }

    const newCraftingLists = [...craftingLists];

    const selectedItem = Items[0][itemID];
    const listIndex = newCraftingLists.findIndex((list) => list.ID === listID);

    if (!newCraftingLists[listIndex].items[itemID]) {
      newCraftingLists[listIndex].items[itemID] = selectedItem;
      setDuplicateItemError(false);
      setCraftingLists(newCraftingLists);
      closePopup();
    } else {
      setDuplicateItemError(true);
    }
  }

  const handleConfirmNewCraftingList = (newListName, closePopup) => {
    // this works for now for a low number of lists but 
    // TO-DO: better list ID system (change lists from array to document)
    let listID = 0;
    while (craftingLists.find((list) => list.ID === listID)) {
      listID += 1;
    }

    let newList = {
      listName: newListName,
      ID: listID,
      items: {}
    }
    setCraftingLists(current => [...current, newList]);
    closePopup();
  }

  const handleEditList = (listID, newListName) => {
    if (newListName.length < 1) {
      return;
    }

    const newCraftingLists = [...craftingLists];

    const editingList = newCraftingLists.findIndex((list) => list.ID === listID); 
    newCraftingLists[editingList].listName = newListName;

    setCraftingLists(newCraftingLists);
  }

  // TO-DO: add user confirmation before delete
  const handleDeleteList = (listID) => {
    const newCraftingLists = [...craftingLists];

    const listIndex = newCraftingLists.findIndex((list) => list.ID === listID);
    newCraftingLists.splice(listIndex, 1);
    setCraftingLists(newCraftingLists);
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'row', direction: 'rtl' }}>
      <Fragment>
        <SideMenu 
          itemsList={itemsList}
          availableLists={craftingLists}
          onClickItem={handleAddItemToList}
          searchInput={searchInput}
          onItemSearch={handleItemSearch}
          duplicateItemError={duplicateItemError}
          noListsError={noListsError}
        />
      </Fragment>
      <Fragment>
        <div className="mainPage">
          <Header />
          <Toolbar 
            onConfirmNewList={handleConfirmNewCraftingList}  
          />
          <Lists 
            lists={craftingLists}
            onEditList={handleEditList}
            onDeleteList={handleDeleteList}  
          />
        </div>
      </Fragment>
    </div>
  )
}

export default MainPage;