import React from "react";
import { DogCard } from "./DogCard";

export const DisplayPups = ({ pups, onShowDetails }) => {
  const cards = pups.map((pup) => {
    return <DogCard key={pup.id} pup={pup} onShowDetails={onShowDetails} />;
  });

  return <div id="dog-bar">{cards}</div>;
};
