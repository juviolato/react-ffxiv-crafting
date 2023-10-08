import React, { Fragment, useState } from "react";
import Popup from 'react-popup';

import SideMenu from "./SideMenu";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Lists from "./components/Lists";

import Items from "./mockAPI/Items.json";
import Recipes from "./mockAPI/Recipes.json";


function MainPage() {
  const [searchInput, setSearchInput] = useState("");
  const [craftingLists, setCraftingLists] = useState([]);
  const [duplicateItemError, setDuplicateItemError] = useState(false);
  const [noListsError, setNoListsError] = useState(false);
  const itemsList = Object.values(Items[0]).filter((item) => {
    return item.Name_en.toLowerCase().match(searchInput.toLowerCase())
  });
  
  const handleItemSearch = (searchTerm) => {
    searchTerm.preventDefault();
    setSearchInput(searchTerm.target.value);
  }

  const handleClickItem = (listID, itemID, closePopup) => {
    // TO-DO: allow multiple of one item per list
    // TO-DO: add fading error pop-up for no list selected
    if (listID < 0) {
      return;
    }

    if (!craftingLists.length) {
      setNoListsError(true);
      return;
    }

    setNoListsError(false);
    const selectedItem = Items[0][itemID];
    const list = craftingLists.find((list) => list.ID === listID);
    console.log(list.items[itemID])
    if (!list.items[itemID]) {
      list.items[itemID] = selectedItem;
      setDuplicateItemError(false);
      setCraftingLists(craftingLists);
      closePopup();
    } else {
      setDuplicateItemError(true);
    }
  }

  const handleConfirmNewCraftingList = (newListName) => {
    // this works for now for a low number of lists but TO-DO: better list ID system
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
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'row', direction: 'rtl' }}>
      <Fragment>
        <SideMenu 
          itemsList={itemsList}
          availableLists={craftingLists}
          onClickItem={handleClickItem}
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
          <Lists lists={craftingLists}/>
        </div>
      </Fragment>
    </div>
  )
}

export default MainPage;