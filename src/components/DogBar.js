import React from "react";
import { FilterButton } from "./FilterButton";
import { DisplayPups } from "./DisplayPups";

export const DogBar = ({ allDogs, onShowDetails , onFilterMode , isFilterOn, setIsFilterOn }) => {


  return (
    <div id="dog-bar">
      <FilterButton
      isFilterOn={isFilterOn}
      setIsFilterOn={setIsFilterOn}
      onFilterMode={onFilterMode}
      />
      <DisplayPups 
      allDogs={allDogs}
      onShowDetails={onShowDetails}
      />
    </div>
  )
}
