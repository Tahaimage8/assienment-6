import React from "react";

const Workflow = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-linear-to-r from-indigo-600 to-purple-600 ">
      <div className="max-w-5xl mx-auto text-center text-white">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Ready To Transform Your Workflow?
        </h1>

        <p className="text-sm sm:text-base text-white/80 mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br className="hidden sm:block" />
          Start your free trial today.
        </p>

        <div className="flex flex-col md:flex-row  justify-center items-center gap-4 mb-6">
          <button className="btn btn-soft w-full sm:w-auto px-6 py-3 bg-white text-purple-600 font-medium rounded-full">
            Explore Products
          </button>

          <button className="btn btn-outline w-full sm:w-auto px-6 py-3 border border-white text-white font-medium rounded-full">
            View Pricing
          </button>
        </div>

        <p className="text-xs sm:text-sm text-white/70">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Workflow;