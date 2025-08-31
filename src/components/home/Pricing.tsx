"use client";
import Image from "next/image";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: 29,
      icon: "/pricing-1.png",
      description: "Lorem Ipsum is simply dummy.",
      features: [
        "Mistakes To Avoid",
        "Your Startup",
        "Knew About Fonts",
        "Winning Metric Startup",
      ],
      highlighted: false,
    },
    {
      name: "Platinum Plan",
      price: 39,
      icon: "/pricing-2.png",
      description: "Lorem Ipsum is simply dummy.",
      features: [
        "Mistakes To Avoid",
        "Your Startup",
        "Knew About Fonts",
        "Winning Metric Startup",
      ],
      highlighted: true,
    },
    {
      name: "Gold Plan",
      price: 59,
      icon: "/pricing-3.png",
      description: "Lorem Ipsum is simply dummy.",
      features: [
        "Mistakes To Avoid",
        "Your Startup",
        "Knew About Fonts",
        "Winning Metric Startup",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="
    max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14    
  ">
        {/* Section Title */}
        <p className="text-orange-500 font-medium mb-2">Our Pricing</p>
        <h1 className="text-4xl font-bold mb-12">
          Harness The Power Of Digital Marketing
        </h1>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 shadow-lg border ${
                plan.highlighted
                  ? "bg-[#fdebe7] border-[#fdebe7]"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Plan Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="h-16 w-16 flex items-center justify-center rounded-full border border-gray-300">
                  <Image src={plan.icon} alt={plan.name} width={32} height={32}className="object-contain"
/>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="font-medium text-[32px] leading-[28px] sm:text-[40px] sm:leading-[32px] md:text-[48px] md:leading-[34px] lg:text-[56px] lg:leading-[36px]
  ">${plan.price}</span>
                <span className="text-lg "> / month</span>
              </div>

              {/* Description */}
              <p className=" text-sm mb-4">{plan.description}</p>

              {/* Features */}
<ul className="text-left space-y-2 mb-8 text-base sm:text-lg leading-[30px] font-normal">
  {plan.features.map((feature, i) => (
    <li key={i} className="flex items-start">
      <span className="mr-2 text-lg leading-[30px]">•</span>
      {feature}
    </li>
  ))}
</ul>

              {/* Button */}
              <button
                className={`w-full rounded-full px-6 py-3 font-medium text-sm transition ${
                  plan.highlighted
                    ? "border  hover:bg-neutral-400"
                    : "border border-gray-400 hover:bg-gray-50"
                }`}
              >
                Take My Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}