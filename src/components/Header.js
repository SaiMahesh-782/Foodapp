import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "./UseOnline";
import { useSelector } from "react-redux";


const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Login");
  const onlinestatus = useOnline();
const cartItems=useSelector((store)=>store.cart.items)


  const handleLoginClick = () => {
    // You can add login logic here
    setLoginBtnText((prevText) => (prevText === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="flex items-center justify-between p-1 bg-red-300 text-white">
      <img
        className="w-20 cursor-pointer"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRxux1MeQZJuPycioQSBBMCkULQ1WmZlBZQ&usqp=CAU"
        alt="Company Logo"
      /> 
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4 cursor-pointer">
          <li>
            Online {onlinestatus ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/" className="hover:underline cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline cursor-pointer">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline cursor-pointer">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline cursor-pointer">Cart[{cartItems.length}]</Link>
          </li>
          
        </ul>
        <button
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
          onClick={handleLoginClick}
        >
          {loginBtnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
