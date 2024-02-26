import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Episodes.css";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results))
      .catch((err) => console.log("Hiba: " + err));
  }, []);

  return (
    <div className="episodes">
      <div className="episodes-container">
        {episodes.map((episode, index) => {
          return (
            <motion.div
              className="episode"
              id={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <p>{episode.episode}</p>
              <h3>{episode.name}</h3>
              <p>{episode.air_date}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
