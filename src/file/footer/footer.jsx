import { AppWindowMac, SquareStop, Tally1 } from "lucide-react";
import React from "react";
import { FaFacebook ,FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-[#0B1A2B] text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">DigiTools</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li >Features</li>
              <li >Pricing</li>
              <li >Templates</li>
              <li >Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li >About</li>
              <li >Blog</li>
              <li >Careers</li>
              <li >Press</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li >Documentation</li>
              <li >Help Center</li>
              <li >Community</li>
              <li >Contact</li>
            </ul>
          </div>
                  <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full text-sm cursor-pointer hover:bg-gray-200 transition">
    <FaInstagram />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full text-sm cursor-pointer hover:bg-gray-200 transition">
<FaFacebook />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full text-sm cursor-pointer hover:bg-gray-200 transition">
<CiLinkedin />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-xs text-gray-400 text-center md:text-left">
            © 2026 Digitools. All rights reserved.
          </p>





          <div className="flex gap-4 text-xs text-gray-400">
            <span >Privacy Policy</span>
            <span >Terms of Service</span>
            <span >Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;