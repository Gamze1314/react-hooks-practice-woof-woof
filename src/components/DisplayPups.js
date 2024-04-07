import React from "react";
import { DogCard } from "./DogCard";

export const DisplayPups = ({ allDogs , onShowDetails }) => {
  const content = allDogs.map((dog) => {
    return <DogCard 
    key={dog.name} 
    id={dog.id} 
    name={dog.name}
    onShowDetails={onShowDetails}
     />;
  });

  return <div id="dog-bar">{content}</div>;
};
