import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import JadwalSection from '../components/JadwalSection'
import AlokasiSection from '../components/AlokasiSection'
import PedomanSection from '../components/PedomanSection'
import GuruSection from '../components/GuruSection'
import DenahSection from '../components/DenahSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <JadwalSection />
      <AlokasiSection />
      <PedomanSection />
      <GuruSection />
      <DenahSection />
      <Footer />
    </main>
  )
}