import React from "react";
import { Link } from "react-router-dom";
import insta from "../../assets/images/insta.png"

const Sidebar = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex justify-between p-4 bg-brown-main text-white-main">
        <Link to={"/"} className="font-fancy self-center text-lg">
          Gauri Gupta
        </Link>
        <a
              href="https://www.instagram.com/imgaurigupta/"
              target="_blank"
              rel="noreferrer"
              className="self-center"
            >
              <img src={insta} alt="instagram" className="w-[30px] h-[30px]"/>
            </a>
      </div>
    </div>
  );
};

export default Sidebar;
