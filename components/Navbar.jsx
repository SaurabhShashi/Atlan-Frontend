"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Featured Models",
      link: "/featured-models",
    },
    {
      name: "Create Model",
      link: "/create-model",
    },
  ];
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <p className="text-white text-xl font-bold">Model Explorer</p>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <p className="text-white hover:text-gray-300">
                      {item.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button */}
            {/* You can customize this button icon */}
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={(open ? "block" : "hidden") + " md:hidden"}>
          <ul className="flex-col my-4 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <p className="text-white hover:text-gray-300  mt-3">
                    {item.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
