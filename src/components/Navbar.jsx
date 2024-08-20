import  { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
      <div>
      <img src={logo} alt="" />
      </div>
       <ul className=" hidden lg:flex items-center gap-12 font-semibold text-base ">
        <li className="p-3 hover:border-b-2 cursor-pointer transition">00 Home</li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">01 Destination</li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">02 Crew</li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">03 Technology</li>
       </ul>
     {/* <div className="relative hidden md:flex items-center justify-center gap-3"></div> */}
     <RxHamburgerMenu className="lg:hidden block text-2xl cursor-pointer"/>
    </nav>
  );
};

export default Navbar;
