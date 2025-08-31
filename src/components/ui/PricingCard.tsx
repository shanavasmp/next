import React from 'react';
import Image from "next/image";

type PricingCardProps = {
  plan: string;
  price: string;
  description: string;
  features: string[];
  icon: string;
  bgColor: string;
};

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, description, features, icon, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor} flex flex-col items-center text-center`}>
      <div className="mb-4">
        <div className={`w-12 h-12 rounded-full bg-white flex justify-center items-center`}>
          <Image src={icon} alt={`${plan} icon`} width={32} height={32} className="object-contain"
/>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <p className="text-lg font-semibold mb-4">{price} / month</p>
      <p className="text-gray-500 mb-4">{description}</p>
      <ul className="text-left mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-700">{feature}</li>
        ))}
      </ul>
      <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">
        Take My Plan
      </button>
    </div>
  );
};

export default PricingCard;