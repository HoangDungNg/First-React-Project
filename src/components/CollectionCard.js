// type "rafce" and press Tab for faster default importing and exporting
import React from 'react';
/** @jsxImportSource theme-ui */
import weth from '../assets/weth.png';
import './CollectionCard.css';
const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard" sx={{ backgroundColor: 'secondary' }}>
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name}{' '}
          <div className="id" sx={{ color: 'idColor' }}>
            #{id}
          </div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
