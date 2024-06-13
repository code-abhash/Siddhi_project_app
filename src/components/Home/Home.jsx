// import React from "react";
// import Navbar from "./Navbar";
// import Dashboard from "./Dashboard";
// import Realtime from "./Realtime";
// import Panel from "./Panel";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="flex flex-col gap-8 home_page ">
//       <div className="bg-slate-200">
//         <Navbar />
//       </div>
//       <div>
//         <p className="p_txt font-bold  ml-3 pt-4 ">Dashboard</p>
//         <Dashboard />
//       </div>
//       <div>
//         <p className="p_txt font-bold  ml-3">Disease Panel</p>
//         <Panel />
//       </div>
//       <div>
//         <p className="p_txt font-bold  ml-3 mt-10 ">Real Time Analysis</p>
//         <Realtime />
//       </div>
//       <div className="flex flex-col gap-5 md:gap-20"></div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Realtime from "./Realtime";
import Panel from "./Panel";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 home_page bg-gray-50 text-gray-700">
      <div className="shadow-md">
        <Navbar />
      </div>
      <div className="p-4">
        <p className="text-xl font-bold mb-2">Dashboard</p>
        <Dashboard />
      </div>
      <div className="p-4">
        <p className="text-xl font-bold mb-2">Disease Panel</p>
        <Panel />
      </div>
      <div className="p-4">
        <p className="text-xl font-bold mb-2">Real Time Analysis</p>
        <Realtime />
      </div>
    </div>
  );
};

export default Home;

