import React from 'react';
import CollectionCard from './CollectionCard';
const Punklist = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div key={punk.id} onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
