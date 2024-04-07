import React from "react";

export const DogCard = ({ name , id, onShowDetails }) => {

  function handleClick(id) {
    onShowDetails(id)
  }

  return (
    <div id="dog-bar">
      <span onClick={() => handleClick(id)} className="dog-bar">
        {name}
      </span>
    </div>
  );
};
