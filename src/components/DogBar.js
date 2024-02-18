import React, { useState, useEffect } from "react";
import { FilterButton } from "./FilterButton";
import { DisplayPups } from "./DisplayPups";

export const DogBar = ({ pups, onShowDetails }) => {
  const [onFilterMode, setOnFilterMode] = useState(false);
  const [filteredPups, setFilteredPups] = useState([]);

  useEffect(() => {
    if (onFilterMode) {
      const goodDogs = pups.filter((pup) => {
        return pup.isGoodDog === true;
      });
      setFilteredPups(goodDogs);
    } else {
      setFilteredPups(pups);
    }
  }, [onFilterMode, pups]);

  return (
    <div id="dog-bar">
      <FilterButton
        filterMode={() => setOnFilterMode(!onFilterMode)}
        setOnFilterMode={setOnFilterMode}
        onFilterMode={onFilterMode}
      />
      <DisplayPups 
      pups={filteredPups} 
      onShowDetails={onShowDetails} 
      />
    </div>
  );
};
