import React, { useState } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
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
        <div>
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
              duplicateItemError={props.duplicateItemError}
              noListsError={props.noListsError}
            />
          </Menu>
        </div>
      </Sidebar>
    </div>
  )
}

export default SideMenu;