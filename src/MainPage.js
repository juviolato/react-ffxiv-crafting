import React, { useState } from "react";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";

function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <Toolbar />
    </div>
  )
}

export default MainPage;