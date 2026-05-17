import React from "react";
import footerImg from "../assets/images/footer-about.svg";

const menuUtama = [
  "Beranda",
  "Jadwal Pelajaran",
  "Alokasi Waktu",
  "Pedoman Mingguan",
  "Guru",
  "Denah Ruangan",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 md:px-16 py-12">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
        {/* Ilustrasi */}
        <div className="flex-1 flex justify-center">
          <img
            src={footerImg}
            alt="About Us"
            className="max-w-xs w-full object-contain"
          />
        </div>

        {/* Info Sekolah */}
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-white font-bold text-xl mb-2">SMK PGRI Wlingi</h3>
          <p className="text-sm leading-relaxed">
            Jl. Jendral Sudirman No. 86 Beru, Wlingi, Blitar, Jawa Timur
          </p>
          <p className="text-sm">Telepon (0342) 691224</p>
          <p className="text-sm">email : smkpgri_wlg@yahoo.co.id</p>
        </div>

        {/* Menu Utama */}
        <div className="flex-1">
          <h3 className="text-white font-bold text-xl mb-4">Menu Utama</h3>
          <ul className="flex flex-col gap-2">
            {menuUtama.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full inline-block"></span>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        2022 © Tim IT SMK PGRI Wlingi
      </div>
    </footer>
  );
}
