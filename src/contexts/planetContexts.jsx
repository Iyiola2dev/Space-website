import { createContext, useState } from "react";
import { destination } from "../data";

// Create the PlanetContext
export const PlanetContext = createContext();

// Create the PlanetContextsProvider component
const PlanetContextsProvider = ({ children }) => {
  // Initialize state with the destinations data
  const [destinationData, setDestinationData] = useState(destination);

  // Example: Get the names of all destinations
  const allDestinationNames = destinationData.map(
    (destination) => destination.name
  );
  console.log(allDestinationNames);

  return (
    <PlanetContext.Provider value={{ destinationData, setDestinationData }}>
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextsProvider;
