import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import insta from "../../assets/images/insta.png"

const Navmenu = ({ className }) => {
  return (
    <div>
      <div className={className}>
        <div className="flex gap-4 text-white-main justify-between py-4 font-primary bg-brown-main px-8">
          <Link to={"/"} className="font-fancy text-xl self-center">
            {" "}
            Gauri Gupta
          </Link>
          <div className="flex gap-8">
            <div className="flex gap-2 self-center text-sm">
              {" "}
              <FaRegEnvelope className=" text-xl self-center" />
              gauri.gupta20008@gmail.com
            </div>
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
      </div>
    </div>
  );
};

export default Navmenu;
