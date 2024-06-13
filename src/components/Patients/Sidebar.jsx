// src/components/Sidebar.jsx
// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="bg-green-400 flex flex-col gap-4 p-6">
//       <h2 className="text-xl font-medium">Patient_Name</h2>
//       <p className='text-lg font-normal'>Age: 55 years</p>
//       <p className='text-lg font-normal'>Height: 175 cm</p>
//       <p className='text-lg font-normal'>Weight: 70 kg</p>
//       <p className='text-lg font-normal'>Sex: Male</p>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { FaUserMd, FaWeight, FaRulerVertical, FaTransgender } from 'react-icons/fa';
import { MdCatchingPokemon } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="shadow-xl bg-gradient-to-b from-white  to-blue-200 rounded-lg p-6 flex flex-col gap-6">
      <div className="flex items-center gap-2 hover:bg-green-100 p-2 rounded-md">
        <MdCatchingPokemon className="text-yellow-500" />
        <p className='text-lg font-normal'>Age: 55 years</p>
      </div>
      <div className="flex items-center gap-2 hover:bg-green-100 p-2 rounded-md">
        <FaRulerVertical className="text-blue-500" />
        <p className='text-lg font-normal'>Height: 175 cm</p>
      </div>
      <div className="flex items-center gap-2 hover:bg-green-100 p-2 rounded-md">
        <FaWeight className="text-purple-500" />
        <p className='text-lg font-normal'>Weight: 70 kg</p>
      </div>
      <div className="flex items-center gap-2 hover:bg-green-100 p-2 rounded-md">
        <FaTransgender className="text-red-500" />
        <p className='text-lg font-normal'>Sex: Male</p>
      </div>
    </aside>
  );
};

export default Sidebar;
