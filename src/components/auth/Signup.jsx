import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSuitcaseMedical,
  faUser,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img4 from "./img/logo.jpg";
import "./Auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const checkpassword = () => {
    if (username !== "" && email !== "" && password !== "") {
      if (password === cpassword) {
        console.log(username, password, cpassword, email, role);
        alert("Your account got created");
        if (role === "doctor") {
          navigate("/home");
        }
        if (role === "nurse") {
          navigate("/nurse");
        }
      }
    } else {
      alert("Can't register and enter details properly");
      console.log(username, password, cpassword, email, role);
    }
  };
  return (
    <div className="flex flex-col bgimg">
      <center>
        <img
          src={img4}
          alt="logo"
          className="w-16 h-auto m-4 border-2 rounded border-gray-500"
        ></img>
      </center>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-400  to-blue-500  backdrop-filter backdrop-blur-lg border-opacity-30 shadow-lg m-auto  p-5 w-full sm:w-4/5 md:w-4/6 lg:w-2/5  border-2  rounded-3xl ">
        <div className=" font-mono font-bold text-4xl underline">Sign up</div>
        <div className="flex flex-col gap-3 mt-8">
          <div className="flex justify-around items-center mt-5 w-72 border-transparent  border-2 bg-slate-100 bg-opacity-10 backdrop-filter  backdrop-blur-xl shadow-2xl rounded-lg">
            <input
              type="text"
              placeholder="Username"
              className="placeholder-black rounded-md placeholder:font-medium placeholder:text-lg font-medium text-lg  w-64  bg-transparent bg-opacity-10"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="flex justify-around items-center bg-slate-100  w-72 border-transparent  border-2  bg-opacity-10 backdrop-filter backdrop-blur-xl shadow-2xl rounded-lg">
            <input
              type="password"
              placeholder="Password"
              className="placeholder-black placeholder:font-medium placeholder:text-lg font-medium text-lg  w-64  bg-transparent bg-opacity-10 "
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="flex justify-around items-center bg-slate-100 w-72 border-transparent border-2  bg-opacity-10 backdrop-filter backdrop-blur-xl shadow-2xl rounded-lg">
            <input
              type="password"
              placeholder="Confirm Password"
              className="placeholder-black placeholder:font-medium placeholder:text-lg font-medium text-lg  w-64  bg-transparent bg-opacity-10"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="flex justify-around items-center w-72 bg-slate-100 border-transparent border-2  bg-opacity-10 backdrop-filter backdrop-blur-xl shadow-2xl rounded-lg">
            <input
              type="email"
              placeholder="Email"
              className="placeholder-black placeholder:font-medium placeholder:text-lg font-medium text-lg  w-64  bg-transparent bg-opacity-10"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="flex justify-between bg-slate-100 items-center border-transparent  border-2 bg-opacity-10 backdrop-filter backdrop-blur-xl shadow-2xl rounded-lg">
            <select
              className="text-black bg-transparent bg-opacity-10 font-medium text-lg"
              name="Role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Occupation</option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
            </select>
            <FontAwesomeIcon icon={faSuitcaseMedical} className="mr-1" />
          </div>
          <button
            className="bg-blue-900 rounded-lg font-black h-10 mt-5 text-slate-200"
            onClick={checkpassword}
          >
            Register
          </button>
          <div className="flex flex-row  justify-between">
            <p className="text-stone-950 font-bold ">
              Already have an account?
            </p>
            <Link to="/Login" className="text-green-100 font-semibold mb-5 ">
              Login!
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
