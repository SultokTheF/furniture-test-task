import React from "react";

import { FurnituresList } from "../modules/Furnitures";

import furnitureData from "../data/furnitureData.json";

const FurnituresPage: React.FC = () => {
  return (
    <>
      <FurnituresList furnitureData={furnitureData} />
    </>
  );
}

export default FurnituresPage