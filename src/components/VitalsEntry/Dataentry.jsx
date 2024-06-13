import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import "./Dataentry.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import HeartRateSlider from "./HeartRateSlider";
import BodyTemperatureSlider from "./BodyTemperatureslider";
import SPO2Slider from "./SPO2Slider";
import SystolicBPSlider from "./SystolicBPSlider";
import DiastolicBPSlider from "./DiastolicBPSlider";

function Dataentry() {
  const navigate = useNavigate();

  const [bodyTemp, setBodyTemp] = useState(37);
  const [heartRate, setHeartRate] = useState(60);
  const [spo2Value, setSpo2Value] = useState(90);
  const [systolicBP, setSystolicBP] = useState(120);
  const [diastolicBP, setDiastolicBP] = useState(80);

  const submitVal = (e) => {
    e.preventDefault();
    alert("Data is entered You are being logged out");
    console.log("Body Temperature:", { bodyTemp });
    console.log("Heart Rate:", { heartRate });
    console.log("SPO2%:", { spo2Value });
    console.log("Systolic BP:", { systolicBP });
    console.log("Diastolic BP:", { diastolicBP });
    navigate("/home");
  };
  const cancelVal = (e) => {
    e.preventDefault();
    alert("Your data won't be saved anymore");
    navigate("/home");
  };
  return (
    <>
      <Navbar />
      <div className="fbgimg">
        <form className="  ">
          <div className="space-y-12 mr-2 ml-2">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex flex-row justify-between">
                <h1 className="text-base font-extrabold  mt-2 leading-7 text-gray-900">
                  VITALS ENTRY PAGE
                </h1>
                <div className="col-span-full">
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <p className=" text-sm leading-6 text-gray-800">
                This Information will be Confidential
              </p>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block font-semibold leading-6 text-gray-900"
                  >
                    Patient ID
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent p-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="XYZ"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 ">
              <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="ent_clr block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="heart_rate"
                    className="block font-semibold leading-6 text-gray-900"
                  >
                    Doctor's Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="rate"
                      name="rate"
                      type="text"
                      className="ent_clr block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <HeartRateSlider />
                <BodyTemperatureSlider />
                <SPO2Slider />
                <SystolicBPSlider />
                <DiastolicBPSlider />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-row justify-center items-center gap-x-6">
            <button
              type="button"
              className="rounded-md bg-red-600 m-20 mr-5 px-3 py-2 text-sm  font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              onClick={cancelVal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-green-600 m-20 ml-0 px-3 py-2 text-sm  font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={submitVal}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dataentry;
