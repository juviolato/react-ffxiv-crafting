import React, { useState } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import "./css/sideMenuStyle.css";
import Items from "./mockAPI/Items.json";
import ItemCard from "./components/ItemCard";
import CollapseMenuHeader from "./components/CollapseMenuHeader";


function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const itemsList = Items
    .filter((item) => { return item.Name_en.toLowerCase().match(searchInput.toLowerCase())})
    .map((item) => <li key={item.ID}><ItemCard item={item}/></li>);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  }

  const handleItemSearch = (searchTerm) => {
    searchTerm.preventDefault();
    setSearchInput(searchTerm.target.value);
  }

  return (
    <div className="sideMenu">
      <Sidebar
        collapsed={collapsed}
        handleCollapseChange={handleCollapse}
        width="22rem"
      >
        <div className="sideMenuContents">
          <Menu>
            <CollapseMenuHeader 
              collapsed={collapsed}
              onCollapse={handleCollapse}
              searchInput={searchInput}
              onItemSearch={handleItemSearch}
            />
          </Menu>
          <Menu className="itemList">
            <div>
              <ul>{itemsList}</ul>
            </div>
          </Menu>
        </div>
      </Sidebar>
    </div>
  )
}

export default SideMenu;