import { useNavigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();
 
  const fetchUser = async () => {
    if(userData) return;
    try {const res = await axios.get( BASE_URL + "/profile/view", {
      withCredentials: true,
    });
    dispatch(addUser(res.data));
  }

  catch (error) {
    if(error.status === 401){
      navigate("/login")
    }
    //console.error(error)
    }
  }

useEffect(() => {
  
  fetchUser();
  
},[]);

  return (
    <div> 
      <NavBar/>
      <Outlet />
      <Footer /> 
      </div>
  )
}

export default Body;