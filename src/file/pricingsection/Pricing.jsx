import React from "react";

const Pricing = () => {
  return (
    <div className="py-20 px-4 bg-base-100 max-w-7xl mx-auto lg:mb-2 md:mb-18 sm:mb-180 mb-180">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>


      <div className="grid md:grid-cols-3 gap-6 max-w-6xl max-h-100 mx-auto">

        <div className="card bg-base-200 shadow-md p-6 rounded-xl">
          <h3 className="text-lg font-semibold">Starter</h3>
          <p className="text-sm text-gray-500 mb-3">
            Perfect for getting started
          </p>

          <h1 className="text-3xl font-bold mb-4">
            $0<span className="text-sm font-normal">/month</span>
          </h1>

          <ul className="space-y-2 text-sm">
            <li>✔ Access to free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="btn btn-primary  rounded-full mt-20">
            Get Started Free
          </button>
        </div>


        <div className="card bg-linear-to-br from-purple-600 to-indigo-600 text-white shadow-lg p-6 rounded-xl relative">
          
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-warning bg-[#FEF3C6] font-[#BB4D00] text-xs">
            Most Popular
          </span>

          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-sm opacity-80 mb-3">
            Best for professionals
          </p>

          <h1 className="text-3xl font-bold mb-4">
            $29<span className="text-sm font-normal">/month</span>
          </h1>

          <ul className="space-y-2 text-sm">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="btn bg-white text-black hover:bg-gray-200 mt-6 rounded-full">
            Start Pro Trial
          </button>
        </div>

        <div className="card bg-base-200 shadow-md p-6 rounded-xl">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <p className="text-sm text-gray-500 mb-3">
            For teams and businesses
          </p>

          <h1 className="text-3xl font-bold mb-4">
            $99<span className="text-sm font-normal">/month</span>
          </h1>

          <ul className="space-y-2 text-sm">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="btn btn-primary mt-6 rounded-full">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;