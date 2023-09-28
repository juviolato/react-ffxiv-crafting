import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { MenuItem } from "react-pro-sidebar";

function CollapseMenuHeader(props) {
  return (
    <div className="header pageSection">
      <MenuItem
        icon={props.collapsed ? <FiChevronsLeft /> : <FiChevronsRight />}
        onClick={props.onCollapse}
      >
        <div><h1 className="pageTitle">FFXIV CRAFTING</h1></div>
      </MenuItem>
      <input
          className="inputField"
          type="text"
          placeholder="Search item"
          onChange={props.onItemSearch}
          value={props.searchInput}
      />
    </div>
  );
}

export default CollapseMenuHeader;