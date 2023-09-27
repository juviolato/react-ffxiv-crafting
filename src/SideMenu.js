import React, { useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./css/style.css";
import Items from "./mockAPI/Items.json";
import ItemCard from "./components/ItemCard";


function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const itemsList = Items.filter((item) => { return item.Name_en.toLowerCase().match(searchInput.toLowerCase())})
    .map((item) => <li key={item.ID}><ItemCard item={item}/></li>);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  }

  const handleItemSearch = (searchTerm) => {
    searchTerm.preventDefault();
    setSearchInput(searchTerm.target.value);
  }

  const collapseMenu = (
    <div className="header">
      <MenuItem>
        <div className="inputField">
          <input
            type="text"
            placeholder="Search item"
            onChange={handleItemSearch}
            value={searchInput}
          />
        </div>
      </MenuItem>
      <MenuItem
        icon={collapsed ? <FiChevronsRight /> : <FiChevronsLeft />}
        onClick={handleCollapse}
      ></MenuItem>
    </div>
  );

  return (
    <div>
      <Sidebar
        className="sideMenu"
        collapsed={collapsed}
        handleCollapseChange={handleCollapse}
        width="22vw"
        collapsedWidth="3vw"
      >
        <main>
          <Menu>
            {collapseMenu}
          </Menu>
          <Menu>
            <ul className="itemList">
              {itemsList}
            </ul>
          </Menu>
        </main>
      </Sidebar>
    </div>
  )
}

export default SideMenu;