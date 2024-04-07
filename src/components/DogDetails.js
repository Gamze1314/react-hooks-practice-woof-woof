import React , { useState } from "react";

export const DogDetails = ({ name, image, isGoodDog }) => {
const [isGood, setIsGood] = useState(isGoodDog)

 function handleToggle() {
   setIsGood(!isGood)
 }

  return (
    <div id="dog-info">
      <img src={image} alt="dog image" />
      <h2>{name}</h2>
      <button onClick={handleToggle}>
        {isGood ? "Good dog :)" : "Bad dog!"}
      </button>
    </div>
  )
}
