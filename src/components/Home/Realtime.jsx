// import React from "react";
// import Heart from "./Heart";
// import Blood from "./Blood";
// import Spo2 from "./Spo2";
// import Temp from "./Temp";
// import './Home.css'

// const Realtime = () => {
//   return (
//     <>
//       <div className=" flex flex-col items-center gap-5 lg:grid grid-cols-2 grid-rows-2 h-4/5 m-5">
//         <div className="m-3 w-4/5 h-full border-none rounded-md real_bg ">
//           <div className="m-1 lg:m-3  font-bold">
//             Heart Beat(bpm)
//           </div>
//           <div>
//             <Heart/>
//           </div>
//         </div>
//         <div className="col-start-2 m-3 w-4/5 h-full border-none rounded-md real_bg">
//           <div className="m-1 lg:m-3 font-bold">
//             Blood Pressure(mm Hg)
//           </div>
//           <div>
//             <Blood />
//           </div>
//         </div>
//         <div className=" row-start-2 m-3 w-4/5 h-full border-none rounded-md real_bg">
//           <div className="m-1 lg:m-3  font-bold">Spo2(%)</div>
//           <div>
//             <Spo2 />
//           </div>
//         </div>
//         <div className=" col-start-2 row-start-2 h-full m-3 w-4/5 border-none rounded-md real_bg">
//           <div className="m-1 lg:m-3 font-bold">
//             Temperature(F)
//           </div>
//           <div>
//             <Temp />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Realtime;

import React from "react";
import Heart from "./Heart";
import Blood from "./Blood";
import Spo2 from "./Spo2";
import Temp from "./Temp";

const Realtime = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 lg:grid grid-cols-2 grid-rows-2 h-auto p-5">
        <div className="m-3 w-full lg:w-4/5 h-64 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4">Heart Beat (bpm)</h2>
          <Heart />
        </div>
        <div className="m-3 w-full lg:w-4/5 h-64 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4">Blood Pressure (mm Hg)</h2>
          <Blood />
        </div>
        <div className="m-3 w-full lg:w-4/5 h-64 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4">Spo2 (%)</h2>
          <Spo2 />
        </div>
        <div className="m-3 w-full lg:w-4/5 h-64 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4">Temperature (F)</h2>
          <Temp />
        </div>
      </div>
    </>
  );
};

export default Realtime;
