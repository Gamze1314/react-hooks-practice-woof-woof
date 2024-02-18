import React from "react";

export const DogCard = ({ pup, onShowDetails }) => {
  function handleClick(id) {
    onShowDetails(id);
  }

  return (
    <div id="dog-bar">
      <span onClick={() => handleClick(pup.id)} className="dog-bar">
        {pup.name}
      </span>
    </div>
  );
};
