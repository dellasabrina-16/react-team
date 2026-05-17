import React from 'react'
import img from '../assets/images/feat-schedule.svg'

export default function JadwalSection() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-50 px-8 md:px-20 py-16 gap-10">
      <div className="flex-1 flex justify-center">
        <img src={img} alt="Jadwal Pelajaran" className="max-w-sm w-full object-contain" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Jadwal Pelajaran</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Pada fitur ini berisi jadwal pelajaran KBM kelas X, XI dan XII dalam bentuk minggu ganjil dan genap
        </p>
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded w-fit transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
          Selengkapnya
        </button>
      </div>
    </section>
  )
}