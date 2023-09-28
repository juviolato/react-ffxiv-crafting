import React, { Fragment } from "react";
import MainPage from "./MainPage";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'row', direction: 'rtl' }}>
      <Fragment><SideMenu /></Fragment>
      <Fragment><MainPage /></Fragment>
    </div>
  );
}

export default App;