import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Locations.css";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results))
      .catch((err) => console.log("Hiba: " + err));
  }, []);

  return (
    <div className="locations">
      <motion.div
        className="locations-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {locations.map((location, index) => {
          return (
            <div className="location" id={index}>
              <p>{location.type}</p>
              <h3>{location.name}</h3>
              <p>{location.dimension}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
