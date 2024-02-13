import React from "react";

import { FurnitureCard } from "../components";

import Furniture from "../../../types/Furniture";

import "./FurnituresList.css";

interface FurnitureListProps {
  furnitureData: Furniture[];
}

const FurnituresList: React.FC<FurnitureListProps> = ({furnitureData}) => {
  return (
    <>
      <div className="furniture">
        <h1>Список всей доступной мебели</h1>
        <hr />
        <div className="furniture-list">
          {furnitureData.map((furniture) => (
            <FurnitureCard
              key={furniture.id}
              id={furniture.id}
              name={furniture.name}
              description={furniture.description}
              likes={furniture.likes}
              dislikes={furniture.dislikes}
              image={furniture.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FurnituresList