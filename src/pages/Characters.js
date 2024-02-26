import { motion } from "framer-motion"; // A framer-motion könyvtár a komponensek animálásához
import { useState, useEffect } from "react"; // A React könyvtár useState és useEffect hook-jai
import "../styles/Characters.css"; // A karakterek stílusfájlja

// Exportáljuk a Characters komponenst
export default function Characters() {
  // Létrehozunk egy állapotot a karaktereknek, kezdetben üres tömbbel
  const [characters, setCharacters] = useState([]);

  // Az useEffect hook segítségével lekérjük a karaktereket az API-ból, amikor a komponens betöltődik
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character") // Az API endpointja
      .then((res) => res.json()) // A válasz JSON formátumúvá alakítása
      .then((data) => setCharacters(data.results)) // A válaszban kapott karakterek beállítása az állapotba
      .catch((err) => console.log("Hiba ->" + err)); // Hiba esetén a hiba logolása a konzolra
  }, []);

  // A selector függvény, ami a kiválasztott karaktert jelöli ki
  const selector = (e) => {
    let hit = e.target.className; // A kattintott elem class neve
    if (hit === "character") {
      // Ha a kattintott elem class neve "character"
      let characters = document.querySelectorAll(".character"); // Az összes ".character" elem lekérdezése
      characters.forEach((character) => {
        character.classList.remove("active"); // Az "active" class eltávolítása minden karakterről
      });

      e.target.classList.add("active"); // Az "active" class hozzáadása a kiválasztott karakterhez
    }
  };

  return (
    <div className="characters">
      <motion.div
        className="characters-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {
        characters.map((character, index) => {
          return (
            <div className="character" value={index} onClick={selector}>
              {/* Minden karakterhez hozzárendeljük a selector függvényt */}{" "}
              <h2>{character.name}</h2>
              <p>{character.species}</p>
              <img src={character.image} alt="kep" />
            </div>
          );
        })
        }
      </motion.div>
    </div>
  );
}
