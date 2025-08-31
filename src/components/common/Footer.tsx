"use client";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fdebe7]">
      {/* Background layer that stays centered to the 1440px container */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="relative w-full">
          {/* Left orange panel with a curved RIGHT edge */}
          <svg
            className="absolute inset-y-0 left-0 h-full w-[58%] sm:w-[45%] lg:w-[36%] hidden sm:block"
            viewBox="0 0 480 388"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="growxOrange" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff5a1f" />
                <stop offset="100%" stopColor="#ff3d0d" />
              </linearGradient>
            </defs>

            {/* This path draws a rectangle whose RIGHT side is a smooth curve,
               matching the reference image (top ≈442px, bottom ≈313px in a 1440×388 artboard). */}
            <path
              fill="url(#growxOrange)"
              d="
                M0 0
                H 442
                C 430 80, 400 140, 380 160
                C 300 260, 280 335, 313 390
                H 0
                Z
              "
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1440px] px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Left column over the orange panel */}
          <div className="relative z-10 text-white">
            {/* Logo + name (swap with your real logo if you have an SVG) */}
            <div className="mb-6 flex items-center gap-3">
              <div className="grid place-items-center rounded-lg font-bold">
              <Image src="/grawx-logos.png" alt="Facebook" width={75} height={75}
  />
              </div>
              <span className="text-2xl font-semibold tracking-wide">GrowX</span>
            </div>

            <p className="mb-6 max-w-xs text-[14px] leading-7 opacity-95 text-black sm:text-black md:text-white">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full  transition hover:bg-white/30"
                aria-label="Facebook"
              >
               <Image src="/logo-facebook.png" alt="Facebook" width={24} height={24}
  />   
              </a>
                            <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full  transition hover:bg-white/30"
                aria-label="LinkedIn"
              >
                <Image src="/logo-linkedin.png" alt="linkedin" width={24} height={24}
  />
              </a>
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full  transition hover:bg-white/30"
                aria-label="LinkedIn"
              >
                <Image src="/logo-instagram.png" alt="instagram" width={24} height={24}
  />
              </a>
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full  transition hover:bg-white/30"
                aria-label="Instagram"
              >
               <Image src="/logo-twitter.png" alt="twitter" width={24} height={24}
  /> 
              </a>
            </div>
          </div>

          {/* Our Company */}
          <div className="ml-0 md:ml-auto">
            <h3 className="mb-4 text-xl font-semibold text-black">Our Company</h3>
            <ul className="space-y-3 text-[15px]">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="ml-0 md:ml-auto">
            <h3 className="mb-4 text-xl font-semibold text-black">Services</h3>
            <ul className="space-y-3 text-[15px]">
              <li><a href="#">Market Research</a></li>
              <li><a href="#">Market Analysis</a></li>
              <li><a href="#">SEO Consultancy</a></li>
              <li><a href="#">Page Ranking</a></li>
              <li><a href="#">SMM</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="ml-0 md:ml-auto">
            <h3 className="mb-4 text-xl font-semibold text-black">Features</h3>
            <ul className="space-y-3 text-[15px]">
              <li><a href="#">Brand&nbsp;Strategy</a></li>
              <li><a href="#">Audience Analytics</a></li>
              <li><a href="#">Copywriting</a></li>
              <li><a href="#">Team Training</a></li>
              <li><a href="#">Email Marketing</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-black">Subscribe</h3>
            <div className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email"
                className="h-11 rounded-xl border border-white/60 bg-white px-4 text-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.08)] outline-none placeholder:text-neutral-400"
              />
              <button className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-[15px] font-medium text-white transition hover:bg-neutral-900 w-40">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}