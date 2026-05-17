import React from "react";

// Data fitur agar mudah diubah tanpa menyentuh JSX
const features = [
  {

  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-center text-black text-2xl md:text-3xl mb-12">
        Fitur yang tersedia di SIKABAR
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center max-w-[160px] gap-3"
          >
            {f.icon}
            <h3 className="font-bold text-gray-800 text-sm">{f.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
