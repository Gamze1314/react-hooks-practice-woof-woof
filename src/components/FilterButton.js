// filter on/off mode
import React from "react";

export const FilterButton = ({ onFilterMode, isFilterOn }) => {

function handleToggle() {
  onFilterMode()
}
  return (
    <>
      <div id="good-dog-filter">
        <button onClick={handleToggle} id="good-dog-filter">
          {isFilterOn ? "FILTER GOOD DOGS : ON" : "FILTER GOOD DOGS : OFF"}
        </button>
      </div>
    </>
  );
}