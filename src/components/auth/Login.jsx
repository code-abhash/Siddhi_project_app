import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import img4 from "./img/logo.jpg";
import users from './Login.json';
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin  = (e) => {
    e.preventDefault();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          if(user.occupation==="nurse"){
            navigate("/nurse");
            alert(`Welcome ${user.occupation}, ${user.username}!`);
            // Here you can redirect to another page or perform other actions
          }
          if(user.occupation==="doctor"){
            navigate("/home");
            alert(`Welcome ${user.occupation}, ${user.username}!`);
          }
        } else {
            setErrorMessage('Invalid username or password');
            alert("Enter Correct Username and Password")
        }

  };
  return (<div className="flex flex-col bgimg">
      
      <center>
        <img
          src={img4}
          alt="logo"
          className="w-16 h-auto m-4 border-2 rounded border-gray-500"
        ></img>
      </center>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-400  to-blue-500  backdrop-filter backdrop-blur-lg border-opacity-30 shadow-lg m-auto  p-5 w-full sm:w-4/5 md:w-4/6 lg:w-2/5  border-2 rounded-3xl ">
        <div className=" font-mono font-bold text-4xl underline">Login</div>
        <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-3 mt-8">
          <div className="flex justify-around rounded-lg items-center mt-5 w-72 border-transparent border-2  bg-slate-100 bg-opacity-10 backdrop-filter backdrop-blur-xl shadow-2xl">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="placeholder-black placeholder:font-medium rounded-md placeholder:text-lg font-medium text-lg  w-64 bg-transparent bg-opacity-10 shadow-2xl "
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="flex justify-around items-center mt-2 w-72 bg-slate-100 border-2 border-transparent  bg-opacity-10 backdrop-filter backdrop-blur-xl shadow-2xl rounded-lg">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="placeholder-black placeholder:font-medium rounded-md placeholder:text-lg font-medium text-lg  w-64  bg-transparent bg-opacity-10 shadow-2xl"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-stone-950 font-bold">
              <input type="checkbox" value="1"></input>Remember me
            </div>
            <Link to="/" className="text-red-600 font-semibold">
              Forgot Password?
            </Link>
          </div>
          <button
            className="bg-blue-900 rounded-lg font-black h-10 mt-5 text-slate-200"
            onClick={handleLogin }
          >
            Login
          </button>
          <div className="flex flex-row gap-2 justify-between mb-12">
            <p className="text-stone-950 font-bold">Don't have an account?</p>
            <Link to="/signup" className="text-green-100 font-semibold ">
              Register Here!
            </Link>
            <div></div>
          </div>
        </div></form>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
