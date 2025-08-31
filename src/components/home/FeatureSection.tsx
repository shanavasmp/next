import React from "react";
import { features } from "@/data/features"; // ✅ Import from data folder

const FeatureSection = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <p className="text-[#FF5722] font-semibold text-lg">Our Feature</p>
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-snug md:leading-[64px] mt-2">
          Optimizing Brands For Online Success
        </h1>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFEFEA] rounded-2xl p-6 text-left flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="text-2xl font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="text-base font-normal leading-6 whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
              <button className="mt-6 w-40 bg-black text-white px-6 py-2 rounded-full font-small hover:bg-gray-800 transition">
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;