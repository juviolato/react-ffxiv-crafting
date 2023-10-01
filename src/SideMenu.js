import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./css/sideMenuStyle.css";
import ItemList from "./components/ItemList";
import CollapseMenuHeader from "./components/CollapseMenuHeader";


function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  }

  // TO-DO: make side menu header sticky
  // TO-DO: show which recipes an item is used in
  return (
    <div className="sideMenu">
      <Sidebar
        collapsed={collapsed}
        handleCollapseChange={handleCollapse}
        width="28rem"
      >
        <div className="sideMenuContents">
          <Menu>
            <CollapseMenuHeader 
              collapsed={collapsed}
              onCollapse={handleCollapse}
              searchInput={props.searchInput}
              onItemSearch={props.onItemSearch}
            />
          </Menu>
          <Menu className="itemList">
            <ItemList
              items={props.itemsList}
              availableLists={props.availableLists}
              onClickItem={props.onClickItem}
            />
          </Menu>
        </div>
      </Sidebar>
    </div>
  )
}

export default SideMenu;