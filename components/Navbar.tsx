"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="px-4 md:px-10 lg:px-24 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="font-black text-xl">ELITE RIDE</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden gap-x-10 text-sm md:flex items-center">
            <p className="cursor-pointer">Support</p>
            <button className="text-white py-2 px-4 rounded shadow transition-colors hover:bg-white hover:text-black bg-green-700 font-bold">
              Download
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white h-screen ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="gap-x-10 text-sm items-center">
          <p className="cursor-pointer text-black">Support</p>
          <button className="text-white py-2 px-4 rounded shadow transition-colors hover:bg-white hover:text-black bg-green-700 font-bold">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
