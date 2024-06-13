import React, { useState } from "react";

const BodyTemperatureSlider = () => {
  // State to hold the body temperature value
  const [bodyTemp, setBodyTemp] = useState(37); // Default to average normal body temperature

  // Function to update the state with the new slider value
  const handleSliderChange = (event) => {
    setBodyTemp(event.target.value);
  };

  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="body-temperature"
        className="block font-semibold leading-6 text-gray-900"
      >
        Body Temperature (°C)
      </label>
      <input
        id="body-temperature"
        name="body-temperature"
        type="range"
        min="34" // Minimum value for Hypothermia
        max="42" // Maximum value for Fever
        value={bodyTemp}
        onChange={handleSliderChange}
        className="form-range h-4 w-full mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>Hypothermia (Less than 36.5)</span>
        <span>Normal (36.5 - 37.5)</span>
        <span>Fever (More than 37.5)</span>
      </div>
      <div className="mt-4 text-center">
        <span className="text-lg font-medium text-gray-900">
          Selected Temperature: {bodyTemp} °C
        </span>
      </div>
    </div>
  );
};

export default BodyTemperatureSlider;
