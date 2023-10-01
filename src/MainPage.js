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
  const itemsList = Items.filter((item) => {
    return item.Name_en.toLowerCase().match(searchInput.toLowerCase())
  });
  
  const handleItemSearch = (searchTerm) => {
    searchTerm.preventDefault();
    setSearchInput(searchTerm.target.value);
  }

  const handleClickItem = (ID) => {
    console.log("Item clicked: ", ID);
  }

  const handleConfirmNewCraftingList = (newListName) => {
    let newList = {
      listName: newListName,
      items: []
    }
    setCraftingLists(current => [...current, newList]);
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'row', direction: 'rtl' }}>
      <Fragment>
        <SideMenu 
          itemsList={itemsList}
          onClickItem={handleClickItem}
          searchInput={searchInput}
          onItemSearch={handleItemSearch}
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