"use client";

import Image from "next/image";

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-orange-500 font-semibold">Our Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
            Drive More Traffic Get <br /> More Sales
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
            risus nunc. Duis egestas ac ante sed tincidunt.
          </p>

          {/* Progress Bars */}
          <div className="mt-10 space-y-8">
            {/* International Authority */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-lg">International Authority</span>
                <span className="font-semibold">$4000</span>
              </div>
              <div className="relative w-full h-2 bg-gray-200 rounded">
                <div className="absolute top-1/2 -translate-y-1/2 left-[80%]">
                  <div className="bg-white shadow-md px-2 py-1 rounded-full text-sm font-bold text-orange-500 border border-orange-400">
                    80%
                  </div>
                </div>
                <div className="h-2 bg-orange-500 rounded" style={{ width: "80%" }} />
              </div>
            </div>

            {/* Real Authority Method */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-lg">Real Authority Method</span>
                <span className="font-semibold">12 Month</span>
              </div>
              <div className="relative w-full h-2 bg-gray-200 rounded">
                <div className="absolute top-1/2 -translate-y-1/2 left-[60%]">
                  <div className="bg-white shadow-md px-2 py-1 rounded-full text-sm font-bold text-orange-500 border border-orange-400">
                    60%
                  </div>
                </div>
                <div className="h-2 bg-orange-500 rounded" style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
<section className="w-full py-12">
  <div className="max-w-[1676px] mx-auto rounded-[45px] overflow-hidden">
    <Image 
      src="/grawxproject.png" 
      alt="Project Section"
          width={650}
    height={500} 
      className="w-full h-auto object-cover"
    />
  </div>
</section>
      </div>
    </section>
  );
};

export default Projects;