import React, { useState } from "react";

const DiastolicBPSlider = () => {
  const [diastolicBP, setDiastolicBP] = useState(80); // Default to average normal diastolic BP

  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="diastolic-bp"
        className="block font-semibold leading-6 text-gray-900"
      >
        Diastolic BP (mm Hg)
      </label>
      <input
        id="diastolic-bp"
        name="diastolic-bp"
        type="range"
        min="60" // Minimum value for Low BP
        max="110" // Maximum value for High BP
        value={diastolicBP}
        onChange={(e) => setDiastolicBP(e.target.value)}
        className="form-range h-4 w-full mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>Low (Less than 80)</span>
        <span>Normal (80-89)</span>
        <span>High (90 and above)</span>
      </div>
      <div className="mt-4 text-center">
        <span className="text-lg font-medium text-gray-900">
          Selected Diastolic BP: {diastolicBP} mm Hg
        </span>
      </div>
    </div>
  );
};

export default DiastolicBPSlider;
