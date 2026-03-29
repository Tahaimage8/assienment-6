import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-white shadow-sm">


      <div className="text-2xl font-bold text-purple-600">
        <span className="text-blue-500">Digi Tools</span>
        
      </div>
    

      <ul className="flex gap-8 text-gray-600 font-medium">
        <li className="hover:text-purple-600 cursor-pointer">
          Products
        </li>

        <li className="hover:text-purple-600 cursor-pointer">
          Features
        </li>

        <li className="hover:text-purple-600 cursor-pointer">
          Pricing
        </li>

        <li className="hover:text-purple-600 cursor-pointer">
          Testimonials
        </li>

        <li className="hover:text-purple-600 cursor-pointer">
          FAQ
        </li>
      </ul>


      <div className="flex items-center gap-6">

        <ShoppingCart className="cursor-pointer text-gray-600" />

        <button className="text-gray-600 font-medium">
          Login
        </button>

        <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700">
          Get Started
        </button>

      </div>

    </nav>
  );
};

export default Navbar;