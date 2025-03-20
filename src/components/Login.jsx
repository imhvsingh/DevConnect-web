import { useState } from "react";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [emailId, setEmailId] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();


const handleLogin = async () => {  

try {const res = await axios.post( BASE_URL + "/login", {
emailId,
password,
},  { withCredentials: true }
)
dispatch(addUser(res.data));
return navigate("/");  
}
catch (err) {
console.error(err);
}
}

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="email">Email ID</label>
          <input 
            type="text" 
            value={emailId}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="password">Password</label>
          <input 
            type="text" 
            value={password}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  </div>
  );
};

export default Login;
