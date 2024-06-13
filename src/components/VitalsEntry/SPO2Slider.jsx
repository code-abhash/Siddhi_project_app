import React, { useState } from "react";

const SPO2Slider = () => {
  const [spo2Value, setSpo2Value] = useState(90);

  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="spo2"
        className="block font-semibold leading-6 text-gray-900"
      >
        SPO2 (%)
      </label>
      <input
        id="spo2"
        name="spo2"
        type="range"
        min="80"
        max="100"
        value={spo2Value}
        onChange={(e) => setSpo2Value(e.target.value)}
        className="form-range h-4 w-full mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>Low (80)</span>
        <span>Normal (90-100)</span>
        <span>High (100)</span>
      </div>
      <div className="mt-4 text-center">
        <span className="text-lg font-medium text-gray-900">
          Selected SpO2%: {spo2Value}%
        </span>
      </div>
    </div>
  );
};

export default SPO2Slider;
