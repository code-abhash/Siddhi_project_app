import React, { useState } from "react";

const SystolicBPSlider = () => {
  const [systolicBP, setSystolicBP] = useState(120); // Default to average normal systolic BP

  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="systolic-bp"
        className="block font-semibold leading-6 text-gray-900"
      >
        Systolic BP (mm Hg)
      </label>
      <input
        id="systolic-bp"
        name="systolic-bp"
        type="range"
        min="90" // Minimum value for Low BP
        max="160" // Maximum value for High BP
        value={systolicBP}
        onChange={(e) => setSystolicBP(e.target.value)}
        className="form-range h-4 w-full mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>Low (Less than 120)</span>
        <span>Normal (120-129)</span>
        <span>High (130 and above)</span>
      </div>
      <div className="mt-4 text-center">
        <span className="text-lg font-medium text-gray-900">
          Selected Systolic BP: {systolicBP} mm Hg
        </span>
      </div>
    </div>
  );
};

export default SystolicBPSlider;
