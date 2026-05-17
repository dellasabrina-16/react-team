import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import JadwalSection from './components/JadwalSection'
import AlokasiSection from './components/AlokasiSection'
import PedomanSection from './components/PedomanSection'
import GuruSection from './components/GuruSection'
import DenahSection from './components/DenahSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <JadwalSection />
        <AlokasiSection />
        <PedomanSection />
        <GuruSection />
        <DenahSection />
      </main>
      <Footer />
    </div>
  )
}