import React from 'react'
import heroStudent from '../assets/images/hero-student.svg'
import agendaExam from '../assets/images/agenda-exam.svg'

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row bg-gradient-to-r from-blue-200 to-white min-h-[85vh] px-8 md:px-16 py-10 gap-8">
      
      <div className="flex-1 flex justify-center">
        <img
          src={heroStudent}
          alt="Ilustrasi Siswa"
          className="max-w-xs md:max-w-md w-full object-contain drop-shadow-xl"
        />
      </div>

      <div className="flex-1 flex flex-col gap-5">

        <div className="flex items-center gap-4 flex-wrap">
          <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded">
            Minggu, 17 Mei 2026
          </span>
          <a href="#" className="text-blue-600 text-sm hover:underline">Login Siswa</a>
          <a href="#" className="text-blue-600 text-sm hover:underline">Login Guru</a>
        </div>

        <h1 className="text-black text-3xl md:text-4xl font-bold leading-tight">
          Sistem Informasi Kegiatan Belajar Mengajar
        </h1>
        <p className="text-black text-base">
          Informasi yang menyediakan berbagai keperluan siswa dalam proses belajar mengajar
        </p>

        <div>
          <h2 className="text-black font-bold text-lg mb-3">Agenda Sekolah</h2>
          <div className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-start max-w-md">
            <img
              src={agendaExam}
              alt="Ujian"
              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-gray-800 text-sm leading-snug">
                Ujian Sumatif Akhir Semester (SAS) Genap Tahun Ajaran 2025/2026
              </h3>
              <p className="text-gray-500 text-xs">
                Fokus dan Percaya Diri! Selamat Berjuang di Ujian Kenaikan Kelas - umum
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded w-fit transition-colors">
                Lihat Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}