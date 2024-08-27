import { createContext, useContext } from "react";

export const planetContext = createContext();

import React from "react";
import { destination } from "../../data";

const planetContextsProvider = ({ children }) => {
  const [destinations, setDestination] = useContext(destination);
  return <div>planetContexts</div>;
};

export default planetContextsProvider;
