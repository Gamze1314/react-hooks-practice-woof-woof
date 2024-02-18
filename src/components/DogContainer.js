import React from 'react'
import { DogDetails } from './DogDetails'

export const DogContainer = ({ selectedPup , pupId}) => {
    console.log(selectedPup)

  return (
    <>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <DogDetails pupId={pupId} selectedPup={selectedPup} />
      </div>
    </>
  );
}
