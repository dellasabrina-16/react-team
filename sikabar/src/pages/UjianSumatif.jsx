import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroUjian from "../assets/images/hero-ujian.svg";
import logoUjian from "../assets/images/logo-sikabar.png";
import {
  BsCalendarCheck,
  BsPersonCheck,
  BsLayoutWtf,
  BsCardList,
  BsPersonBadge,
} from "react-icons/bs";
import { MdOutlineEditCalendar } from "react-icons/md";

const fiturUjian = [
  {
    icon: <BsCalendarCheck size={64} />,
    title: "Jadwal Ujian Tahap 1",
    sub: "(Kelas XI PKL Gel-2)",
  },
  {
    icon: <BsCalendarCheck size={64} />,
    title: "Jadwal Ujian Tahap 2",
    sub: "(Kelas X & XI PKL Gel-1)",
  },
  {
    icon: <BsPersonCheck size={64} />,
    title: "Daftar Peserta Ujian",
    sub: "",
  },
  {
    icon: <BsLayoutWtf size={64} />,
    title: "Ruang Ujian",
    sub: "",
  },
  {
    icon: <BsCardList size={64} />,
    title: "Informasi Kartu Ujian",
    sub: "",
  },
  {
    icon: <MdOutlineEditCalendar size={64} />,
    title: "Jadwal Kepengawasan Ujian",
    sub: "",
  },
];

export default function UjianSumatif() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans">
      <nav className="bg-blue-500 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              src={logoUjian}
              alt="logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-white text-lg tracking-wide">
              SIKABAR
            </span>
          </div>
          <div className="flex items-center gap-6 text-white text-sm">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Beranda
            </Link>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Jadwal Ujian
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Peserta Ujian
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Sesi Ujian
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Ruang Ujian
            </a>
          </div>
        </div>

        <a
          href="#"
          className="text-white text-sm hover:text-blue-200 transition-colors font-medium"
        >
          Login Guru
        </a>
      </nav>

      <section className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-400 to-white min-h-[85vh] px-8 md:px-20 py-10 gap-8">

        <div className="flex-1 flex justify-center">
          <img
            src={heroUjian}
            alt="Ilustrasi Ujian"
            className="max-w-xs md:max-w-lg w-full object-contain drop-shadow-xl"
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-gray-800 text-3xl md:text-4xl font-extrabold leading-tight">
            Ujian Sumatif Akhir Semester (SAS) Genap Tahun Ajaran 2025/2026
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Penilaian Sumatif Akhir Semester Genap (SAS Genap) yang dilaksanakan
            Kelas XI PKL Gel-2 pada tanggal 18 s/d 22 Mei 2026, Kelas X dan XI
            PKL Gel-1 pada tanggal 2 s/d 10 Juni 2026
          </p>
          <p className="text-blue-600 font-bold text-lg underline">
            Fokus dan Percaya Diri! Selamat Berjuang di Ujian Kenaikan Kelas
          </p>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-center text-gray-700 text-xl md:text-2xl font-light mb-14 max-w-3xl mx-auto leading-relaxed">
          Informasi Berkaitan Ujian Sumatif Akhir Semester (SAS) Genap Tahun
          Ajaran 2025/2026
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {fiturUjian.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center max-w-[160px] gap-3 cursor-pointer hover:text-blue-500 transition-colors group"
            >
              <div className="text-gray-800 group-hover:text-blue-500 transition-colors">
                {f.icon}
              </div>
              <p className="font-bold text-gray-800 text-sm group-hover:text-blue-500 transition-colors">
                {f.title}
                {f.sub && (
                  <span className="block font-normal text-xs text-gray-500">
                    {f.sub}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-5 text-sm">
        2023 © Tim IT X DGHAM RPL SMK PGRI Wlingi
      </footer>
    </div>
  );
}
