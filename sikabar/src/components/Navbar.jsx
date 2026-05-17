import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

export default function Navbar() {
  const [guruOpen, setGuruOpen] = useState(false)

  return (
    <nav className="bg-blue-500 px-6 py-3 flex items-center gap-8 sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-2 mr-4">
        <img src={logo} alt="SIKABAR Logo" className="w-8 h-8 object-contain" />
        <span className="text-white text-lg tracking-wide">SIKABAR</span>
      </div>

      <div className="flex items-center gap-6 text-gray-300 text-sm">
        <a href="#" className="hover:text-white transition-colors">Beranda</a>
        <a href="#" className="hover:text-white transition-colors">Jadwal Pelajaran</a>

        <div className="relative">
          <button
            onClick={() => setGuruOpen(!guruOpen)}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            Guru
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {guruOpen && (
            <div className="absolute top-7 left-0 bg-white text-gray-700 rounded shadow-lg min-w-[150px] py-1 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-white text-sm">Daftar Guru</a>
              <a href="#" className="block px-4 py-2 hover:bg-white text-sm">Kode Guru</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-white transition-colors">Denah</a>
      </div>
    </nav>
  )
}