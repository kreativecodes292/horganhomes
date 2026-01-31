import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Main from "./pages/Main.jsx";


export default function App() {
  return (
    <Router>
      <div className="relative gradient text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
