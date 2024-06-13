// src/components/PatientInfo.jsx
import React from 'react';

const PatientInfo = () => {
  return (
    <div className=" flex flex-col gap-6 p-6">
      <h2 className="text-gray-800 text-xl font-semibold">Patient_Name</h2>
      <h2 className='text-lg font-normal'>Condition:Serious</h2>
      <h2 className='text-lg font-normal'>Location: Delhi</h2>
      <h2 className='text-lg font-normal'>Recent Vitals: </h2>
      <h2 className='text-lg font-normal'>Medication: </h2>
      <h2 className='text-lg font-normal'>Diseases: </h2>
      <h2 className='text-lg font-normal'>Past Medical History:</h2>
    </div>
  );
};

export default PatientInfo;


