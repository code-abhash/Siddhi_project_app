import React, { useState } from "react";

const HeartRateSlider = () => {
  // State to hold the heart rate value
  const [heartRate, setHeartRate] = useState(60); // Default to normal heart rate

  // Function to update the state with the new slider value
  const handleSliderChange = (event) => {
    setHeartRate(event.target.value);
  };

  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="heart-rate"
        className="block font-semibold leading-6 text-gray-900"
      >
        Heart Rate (bpm)
      </label>
      <input
        id="heart-rate"
        name="heart-rate"
        type="range"
        min="40"
        max="160"
        value={heartRate}
        onChange={handleSliderChange}
        className="form-range h-4 w-full mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>Low (40)</span>
        <span>Normal (60-100)</span>
        <span>High (160+)</span>
      </div>
      <div className="mt-4 text-center">
        <span className="text-lg font-medium text-gray-900">
          Selected Heart Rate: {heartRate} bpm
        </span>
      </div>
    </div>
  );
};

export default HeartRateSlider;
