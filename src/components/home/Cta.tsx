import React from "react";
import Image from "next/image";

const CompanyCTA = () => {
  return (
    <section className="relative w-full flex justify-center bg-white overflow-hidden pb-20 px-6 lg:px-16 lg:pr-0">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="max-w-[1121px] text-left">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[48px] sm:leading-[56px] lg:leading-[72px] mb-8">
            Are you ready to take your company revenue <br /> next level?
          </h2>
          <button className="w-[167px] h-[48px] rounded-[30px] bg-black text-white text-sm sm:text-base font-semibold hover:bg-gray-900 transition">
            Contact Us
          </button>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 lg:mt-0 flex-shrink-0">
          <Image
            src="/grawxcta.png"
            alt="Decorative Pattern"
            width={300}
            height={305}
            className="w-[200px] sm:w-[250px] lg:w-[300px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyCTA;