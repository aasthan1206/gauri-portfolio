import React from "react";
import Sidebar from "./Sidebar";
import Navmenu from "./Navmenu";

const Navigation = () => {
  return (
    <>
      <Navmenu className={"hidden lg:block"} />
      <Sidebar className={"relative block lg:hidden"} />
    </>
  );
};

export default Navigation;
