import React, { useEffect, useState } from "react";
import { DogBar } from "./DogBar";
import { DogContainer } from "./DogContainer";

function App() {
  const [pups, setPups] = useState([]);
  const [pupId, setPupId] = useState(null);
  const [selectedPup, setSelectedPup] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((res) => res.json())
      .then((pupsData) => setPups(pupsData));
  }, []);

  useEffect(() => {
    if (pupId) {
      fetch(`http://localhost:3001/pups/${pupId}`)
        .then((res) => res.json())
        .then((selectedPupData) => setSelectedPup(selectedPupData));
    }
  }, [pupId]);

  const showDetails = (id) => {
    setPupId(id);
  };

  return (
    <div className="App">
      <DogBar 
      pups={pups} 
      setPups={setPups} 
      onShowDetails={showDetails} 
      />
      <DogContainer selectedPup={selectedPup} pupId={pupId} />
    </div>
  );
}

export default App;
