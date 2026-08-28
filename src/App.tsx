import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Home from "@/pages/Home";
import Knx from "@/pages/Knx";
import Wifi from "@/pages/Wifi";
import Zigbee from "@/pages/Zigbee";
import HomeAssistant from "@/pages/HomeAssistant";
import Bms from "@/pages/Bms";
import PythonPage from "@/pages/PythonPage";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knx" element={<Knx />} />
          <Route path="/wifi" element={<Wifi />} />
          <Route path="/zigbee" element={<Zigbee />} />
          <Route path="/home-assistant" element={<HomeAssistant />} />
          <Route path="/bms" element={<Bms />} />
          <Route path="/python" element={<PythonPage />} />
        </Routes>
      </main>
    </>
  );
}
