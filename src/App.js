import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout> {/* A Layout komponens children elemeként átadtam az AnimatedRoutes komponenst. Ez tartalmazza a Pageket elérési Útvonallal együtt! */}
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
