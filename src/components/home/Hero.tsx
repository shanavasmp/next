"use client";

import Image from "next/image";

export default function Hero() {
  // Smooth scroll handler
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // scrolls down 1 screen
      behavior: "smooth",
    });
  };

  return (
    <section className="relative max-w-[1440px] mx-auto mt-12 px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-10">
            {/* Decorative Curves */}
      <Image
        src="/top-right.png" // add this asset
        alt="Decorative curve"
        width={260}
        height={200}
        className="absolute top-[-140px] left-[0px] pointer-events-none select-none"
      />
      <Image
        src="/top-left.png" // add this asset
        alt="Decorative curve"
        width={200}
        height={200}
        className="absolute top-[-140px] right-[0px] pointer-events-none select-none"
      />
      <Image
        src="/grawx-line.png" // add this asset
        alt="Decorative curve"
        width={644}
        height={300}
        className="absolute bottom-[-116px] left-[0px] pointer-events-none select-none"
      />

      {/* Left Content */}
      <div className="relative space-y-6">
        {/* Decorative Top-Right Icon */}
        <Image
          src="/grawx-text.png"
          alt="Decorative Icon"
          width={58}
          height={56}
          className="absolute -top-6 right-10"
        />

        <h2 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] font-semibold leading-[48px] sm:leading-[64px] md:leading-[80px] lg:leading-[100px]">
          Unlock Your <br />
          <span className="text-orange-500">Online Marketing</span>
        </h2>
        <p className="font-normal text-base md:text-[18px] leading-6 md:leading-[30px] max-w-lg">
          Empowering Success: Unleashing Strategic Excellence with Our
          Results-Driven Digital Marketing Agency
        </p>
        <button className="bg-black text-white w-[140px] h-[44px] md:w-[167px] md:h-[48px] rounded-[30px] shadow-md hover:bg-gray-800 transition text-sm md:text-base">
          GET IN TOUCH
        </button>
      </div>

      {/* Right Content - Image + overlays */}
      <div className="relative flex justify-center">
        {/* Person Image */}
        <Image
          src="/hero-second.png"
          alt="GrowX Hero"
          width={679}
          height={609}
          className="relative z-10"
          priority
        />

        {/* Scroll Down Icon */}
        <Image
          src="/scroll-bottom.png"
          alt="Scroll Down"
          width={100}
          height={100}
          className="absolute bottom-[140px] left-[-14px] z-20 cursor-pointer animate-spin-slow"
          onClick={handleScroll}
        />
      </div>
    </section>
  );
}