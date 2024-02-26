import { motion } from "framer-motion";
import { QuoteList } from "../QuoteList"; // Az idézetek listájának importálása
import { useState, useEffect } from "react";
import RickImage from "../assets/RickImage.jpg";
import "../styles/Home.css";

export default function Home() {
  const [i, setI] = useState(0); // Az állapot inicializálása 0-val, ami az idézetek indexét fogja követni

  useEffect(() => {
    // Az useEffect hook, ami egy időzítőt indít el az állapot frissítésére
    const timer = setInterval(() => {
      // Az állapot frissítése: ha az index elérte a lista végét, nullázzuk, különben növeljük
      setI((i) => (i < QuoteList.length - 1 ? (i = i + 1) : 0));
    }, 2500); // Az időzítő minden 2.5 secben lefut.
    return () => clearInterval(timer); // Az időzítő törlése, ha a komponens lecsatolódik
  }, [i]);

  return (
    <div className="home" style={{ backgroundImage: `url(${RickImage})` }}>
      <motion.h1
        initial={{ x: -700 }}
        animate={{ x: 0 }}
        exit={{ x: -700 }}
        transition={{ duration: 0.3 }}
      >
        React Rick & Morty
      </motion.h1>
      <motion.q
        initial={{ x: -700 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        transition={{ duration: 1 }}
      >
        {QuoteList[i]}
      </motion.q>
    </div>
  );
}
