import React from "react";
import { DogDetails } from "./DogDetails";

export const DogContainer = ({ selectedDog }) => {

  return (
    <>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        {selectedDog.map((d) => ( 
            <DogDetails
            key={d.id}
            name={d.name}
            image={d.image}
            isGoodDog={d.isGoodDog}
          />
        ))}
      </div>
    </>
  );
}
