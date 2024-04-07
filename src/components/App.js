import React, { useEffect, useState } from "react";
import { DogBar } from "./DogBar";
import { DogContainer } from "./DogContainer";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);


  const dogsToDisplay = allDogs.filter((d) => {
    return isFilterOn ? d.isGoodDog === true : d
  })

  const onFilterMode = () => {
    setIsFilterOn(!isFilterOn)
}

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((res) => res.json())
      .then((data) => setAllDogs(data));
  }, []);

  const onShowDetails = (id) => {
    const dogObj = allDogs.find((d) => d.id === id); // Find the selected dog from allDogs array
    setSelectedDog([dogObj]); // Update selectedDog state with the selected dog
  };

  if (allDogs.length > 0) {
    return (
      <div className="App">
        <DogBar
          isFilterOn={isFilterOn}
          setIsFilterOn={setIsFilterOn}
          onFilterMode={onFilterMode}
          allDogs={dogsToDisplay}
          setAllDogs={setAllDogs}
          onShowDetails={onShowDetails}
        />
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
