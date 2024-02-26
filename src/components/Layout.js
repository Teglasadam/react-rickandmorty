import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Layout.css";
import { GiUfo, GiMonsterGrasp } from "react-icons/gi";
import { FaSpaghettiMonsterFlying } from "react-icons/fa6";
import { LiaOptinMonster } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

/* Propként át van adva egy children prop. Ezt egyedi módon értelmezi a React. */
export default function Layout({ children }) {
  return (
    /* Teljes Layout Div - Ez tartalmazza a Fejlécet - Tartalmi egységet -
      Láblécet */
    <div className="layout">
      <motion.div
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="navbar-left">
          <Link to="/"><GiUfo /></Link>
        </div>
        <div className="navbar-right">
          <Link to="/characters">Characters</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/locations">Locations</Link>
          <button
            onClick={() => {
              alert("Ez itt a Beállítások függvénye.");
            }}
          >
            <IoSettingsSharp />
          </button>
          <span className="hamburger">
            <RxHamburgerMenu />
          </span>
        </div>
      </motion.div>
      {/* Ide jönnek a Children Pagek. Emiatt van az App.jsben a Layout közé téve children elemnek az AnimatedRoutes.js */}
      <div>{children}</div>
      {/* Lábléc tartalma */}
      <motion.div
        className="footer"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/linkdin">
          <FaSpaghettiMonsterFlying />
        </Link>
        <Link to="/facebook">
          <LiaOptinMonster />
        </Link>
        <Link to="/twitter">
          <GiMonsterGrasp />
        </Link>
      </motion.div>
    </div>
  );
}
