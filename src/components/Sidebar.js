import React from "react";
import Navbar from "./Navbar.js";
import Search from "./Search.js";
import Chats from "./Chats.js";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};
export default Sidebar;
