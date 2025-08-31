"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-center">
      <nav className="w-full max-w-[1440px] flex items-center justify-between px-6 md:px-12 py-3">
        
        {/* Logo */}
<div className="flex items-center space-x-2">
  <Image
    src="/growx-logo.png"
    alt="GrowX Logo"
    width={73}
    height={73}
    className=" w-auto"
  />
  <span className="font-medium text-[32px] leading-[72px] sm:text-[28px] sm:leading-[48px] xs:text-[24px] xs:leading-[36px]
  ">GrowX</span>
</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 bg-white shadow-sm px-6 py-2 rounded-full">
          <li>
            <Link href="/" className="text-orange-500 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-orange-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-black hover:text-orange-500 transition">
              Service
            </Link>
          </li>
          <li>
            <Link href="/page" className="text-black hover:text-orange-500 transition">
              Page
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link href="/" className="text-orange-500 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-orange-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-black hover:text-orange-500 transition">
                Service
              </Link>
            </li>
            <li>
              <Link href="/page" className="text-black hover:text-orange-500 transition">
                Page
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}