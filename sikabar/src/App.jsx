import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UjianSumatif from "./pages/UjianSumatif";

  function AppContent() {
    const location = useLocation()
    const hideNavbar = location.pathname === '/ujian-sumatif'
    
    return(
    <div className="className">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ujian-sumatif" element={<UjianSumatif />} />
      </Routes>
    </div>
  )
}

export default function App(){
  return(
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}