import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Img404 from "../assets/Img404.jpg";
import "../styles/PageNotFound.css";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const [counter, setCounter] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    if (counter == 0) {
      navigate("/");
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <motion.div
      className="notfound"
      style={{ backgroundImage: `url(${Img404})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h1
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.4 }}
      >
        A keresett oldal nem található!
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, x: -700 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -700 }}
        transition={{ duration: 1 }}
      >
        Visszatérés a kezdőoldalra {counter} másodperc múlva!
      </motion.h3>
    </motion.div>
  );
}
