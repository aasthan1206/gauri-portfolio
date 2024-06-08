import React from "react";
import { useParams } from "react-router-dom";
import { artData } from "../utils/ArtData";

const Art = () => {
  let { id } = useParams();
  const artId = parseInt(id, 10); // Convert id to a number

  // Find the image object with the matching id
  const artItem = artData.find((item) => item.id === artId);

  // Check if the artItem exists
  if (!artItem) {
    return <div>Art not found</div>;
  }

  return (
    <div className="m-8 lg:flex justify-evenly">
      <div className="flex justify-center self-center">
        <img
          src={artItem.img}
          alt=""
          className="w-[300px] h-[300px] lg:w-[475px] lg:h-[475px] lazyload"
        />
      </div>
      {/* <div className="text-center py-8 lg:text-left">
        <div>Title</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div> */}
    </div>
  );
};

export default Art;
