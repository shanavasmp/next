"use client";

import Image from "next/image";

const Clients = () => {
  const logos = [
    { src: "/lightbox.png", alt: "Lightbox" },
    { src: "/globalbank.png", alt: "GlobalBank" },
    { src: "/nietzense.png", alt: "Nietzsche" },
    { src: "/spherule.png", alt: "Spherule" },
    
  ];

  return (
    <section className="py-16 bg-white">
      <div className="overflow-hidden relative">
        {/* Marquee Wrapper */}
        <div className="flex animate-marquee space-x-20">
          {logos.concat(logos).map((logo, idx) => (
            <Image
              key={idx}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;