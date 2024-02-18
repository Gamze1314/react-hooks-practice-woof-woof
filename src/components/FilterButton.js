// filter on/off mode
import React from "react";

export const FilterButton = ({ filterMode, setOnFilterMode, onFilterMode }) => {
  function handleClick() {
    setOnFilterMode(!onFilterMode);
    filterMode();
  }

  return (
    <>
      <div id="dog-bar">
        <button onClick={handleClick} id="good-dog-filter">
          {onFilterMode ? "Filter good dogs: ON" : "Filter good dogs: OFF"}
        </button>
      </div>
    </>
  );
};
