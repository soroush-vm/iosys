import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Home from "@/pages/Home";
import Iot from "@/pages/Iot";
import AccessControlCCTV from "@/pages/AccessControlCCTV";
import PowerElectronics from "@/pages/PowerElectronics";
import Bms from "@/pages/Bms";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iot" element={<Iot />} />
          <Route path="/accesscontrol-cctv" element={<AccessControlCCTV />} />
          <Route path="/power-electronics" element={<PowerElectronics />} />
          <Route path="/bms" element={<Bms />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
