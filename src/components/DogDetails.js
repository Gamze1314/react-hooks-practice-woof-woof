import React, { useState } from "react";

export const DogDetails = ({ selectedPup, pupId }) => {
  console.log(selectedPup);
  const [isGood, setIsGood] = useState(false);

  return pupId ? (
    <div id="dog-info">
      <img src={selectedPup.image} alt="dog image" />
      <h2>{selectedPup.name}</h2>
      <button onClick={() => setIsGood(!isGood)}>
        {isGood ? "Good Dog" : "Bad Dog"}
      </button>
    </div>
  ) : null;
};
