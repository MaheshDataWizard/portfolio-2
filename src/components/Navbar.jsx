import React, { useState } from 'react'
import assets from '../assets/assets'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between text-white mx-5 sm:mx-20 py-2 sm:py-6">
        {/* Logo */}
        <p className="font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#B923E1] to-[#DA7C25]">
          rushabh.K
        </p>

        {/* Navigation Links */}
        <ul
          className={`items-center gap-5 font-medium transition-all duration-200 ${menuOpen
              ? "flex flex-col text-sm text-white absolute right-1 bg-black/90 top-10 p-5 rounded-lg shadow-lg z-50"
              : "hidden sm:flex"
            }`}
        >
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="#home"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="#about-me"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="#services"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="#portfolio"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="#contact"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Connect Button (only desktop) */}
        <p className="hidden md:block font-medium px-4 py-3 rounded-full bg-gradient-to-r from-[#B923E1] to-[#DA7C25] hover:scale-105 transition-all duration-200 cursor-pointer">
          Connect With Me
        </p>


        <div className="sm:hidden">
          {menuOpen ? (
            <img
              src={assets.menu_close}
              onClick={() => setMenuOpen(false)}
              className="w-5 cursor-pointer"
              alt="close menu"
            />
          ) : (
            <img
              src={assets.menu_open}
              onClick={() => setMenuOpen(true)}
              className="w-5 cursor-pointer"
              alt="open menu"
            />
          )}
        </div>
      </div>

      {/* Divider line */}
      <hr className="text-[#B923E1] mx-5 sm:mx-20 max-sm:hidden" />
    </>
  );
};

export default Navbar;
