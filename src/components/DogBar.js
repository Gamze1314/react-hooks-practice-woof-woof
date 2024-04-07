import React from "react";
import { FilterButton } from "./FilterButton";
import { DisplayPups } from "./DisplayPups";

export const DogBar = ({ allDogs, onShowDetails }) => {
console.log(allDogs)


  return (
    <div id="dog-bar">
      <FilterButton
      />
      <DisplayPups 
      allDogs={allDogs}
      onShowDetails={onShowDetails}
      />
    </div>
  )
}
