import React, { useState } from 'react';
import './FurnitureCard.css';

import Furniture from '../../../../types/Furniture';

const MAX_DESCRIPTION_LENGTH = 40;

const FurnitureCard: React.FC<Furniture> = ({ id, name, description, likes, dislikes, image }) => {
  const [likesAmount, setLikesAmount] = useState(likes);
  const [dislikesAmount, setDislikesAmount] = useState(dislikes);

  const truncatedDescription = description.length > MAX_DESCRIPTION_LENGTH ?
    description.substring(0, MAX_DESCRIPTION_LENGTH).trim() + '...' :
    description;

  return (
    <div className="furniture-info-card">
      <div className="furniture-image-container">
        <img src={image} alt={name} className="furniture-image" />
      </div>
      <h2>{name}</h2>
      <p>{truncatedDescription}</p>
      <div className="likes-dislikes">
        <button className='like-button' onClick={() => {setLikesAmount(likesAmount + 1)}}>👍</button> <span>Likes: {likesAmount}</span>
        <button className='dislike-button' onClick={() => {setDislikesAmount(dislikesAmount + 1)}}>👎</button> <span>Dislikes: {dislikesAmount}</span>
      </div>
      <a href={`furniture/${id}`} className='go-to-furniture-button'>Go to Furniture &raquo;</a>
    </div>
  );
};

export default FurnitureCard;