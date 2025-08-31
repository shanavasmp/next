"use client";

import { services } from "@/data/services";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
      {/* Heading */}
      <div className=" space-y-4 mb-12">
        <h2 className="font-medium text-3xl leading-9 md:text-4xl md:leading-[48px] lg:text-[56px] lg:leading-[72px]">
          Our Digital Marketing Services
        </h2>
        <p className="font-normal text-base leading-6 md:text-lg md:leading-7 lg:text-[18px] lg:leading-[30px] ">
          Unveiling Comprehensive Solutions Through Our Cutting-Edge Digital Marketing Services
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition">
          VIEW ALL SERVICES
        </button>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}