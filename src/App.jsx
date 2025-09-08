import pencilsImg from "./assets/pencils.png";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${pencilsImg})` }}
    >
      {/* Overlay (optional, to darken the background) */}
      <div className="min-h-screen bg-black bg-opacity-50">
        <Navbar />
        <Outlet />
        <Hero/>
        <Footer/>
      </div>
    </div>
  );
}
