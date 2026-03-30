import React, { use } from "react";

const Step = ({ stepPromise }) => {
  const steps = use(stepPromise);

  return (
    <div className="py-20   max-w-7xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-xl border p-6 text-center relative shadow-sm "
          >
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              {step.id}
            </span>

            <div className="flex justify-center mb-4 group">
              <div className="bg-purple-100 p-4 rounded-full hover:shadow-lg transition duration-300 hover:scale-110">
                <img src={step.img} alt="" className="w-8 h-8" />
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;