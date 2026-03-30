import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = ({carts}) => {

return (

<nav className="px-6 md:px-16 py-4 bg-white shadow-sm max-w-7xl mx-auto">

<div className="flex items-center justify-between">



<div className="text-2xl font-bold">

<p className="text-purple-600">DigiTools</p>

</div>




<ul className="hidden md:flex gap-8 text-gray-600 font-medium">

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


<div className="relative">
  <ShoppingCart className="hidden md:block cursor-pointer text-gray-600" />

  {carts.length > 0 && (
    <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
      {carts.length}
    </div>
  )}
</div>

<button className="hidden md:block text-gray-600 font-medium">
Login
</button>




<button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700">

Get Started

</button>

</div>

</div>

</nav>

);

};

export default Navbar;