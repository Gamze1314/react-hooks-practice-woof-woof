import React, { useEffect, useState } from "react";
import { DogBar } from "./DogBar";
import { DogContainer } from "./DogContainer";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((res) => res.json())
      .then((data) => setAllDogs(data));
  }, []);

  const onShowDetails = (id) => {
    const dogObj = allDogs.find((d) => d.id === id); // Find the selected dog from allDogs array
    setSelectedDog([dogObj]); // Update selectedDog state with the selected dog
  };
  
  console.log(selectedDog)

  if (allDogs.length > 0) {
    return (
      <div className="App">
        <DogBar allDogs={allDogs} onShowDetails={onShowDetails} />
        <DogContainer selectedDog={selectedDog} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    );
  }
}

export default App;
