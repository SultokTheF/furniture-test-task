import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import furnitureData from '../../../data/furnitureData.json';

import Furniture from '../../../types/Furniture';

import "./FurnitureInfo.css";

const FurnitureInfo: React.FC = () => {
  const [furniture, setFurniture] = useState<Furniture | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const foundFurniture = furnitureData.find(item => item.id === parseInt(id, 10));
      setFurniture(foundFurniture || null);
    }
  }, [id]);

  return (
    <div className="furniture-info">
      <div className="container">
        {furniture ? (
          <div className="furniture-details">
            <h2 className="title">{furniture.name}</h2>
            <img src={furniture.image} alt={furniture.name} className="image" />
            <p className="description">{furniture.description}</p>
            <div className="flex">
              <p className="likes">Likes: {furniture.likes}</p>
              <p className="dislikes">Dislikes: {furniture.dislikes}</p>
            </div>
          </div>
        ) : (
          <p>Furniture not found</p>
        )}
      </div>
    </div>
  );
}

export default FurnitureInfo