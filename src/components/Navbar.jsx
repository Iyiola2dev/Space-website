import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center text-white py-6 px-8 lg:px-32  drop-shadow-md relative font-barlow-con">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className=" hidden md:flex items-center justify-center md:gap-3 lg:gap-7 absolute py-6 lg:p-10 px-3 right-0 font-semibold bg-[rgba(255,255,255,0.04)] text-white text-lg lg:text-xl">
        {/* <hr className="md:hidden lg:flex w-full border-white" /> */}
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="/">00 Home</Link>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="/destination"> 01 Destination</Link>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="/crew">02 Crew</Link>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="/technology"> 03 Technology</Link>
        </li>
      </ul>
      {/* <div className="relative hidden md:flex items-center justify-center gap-3"></div> */}
      <span
        className="z-30 md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoClose className=" block text-2xl cursor-pointer" />
        ) : (
          <RxHamburgerMenu />
        )}
      </span>

      <div
        className={`absolute xl:hidden top-0 w-[70%] h-screen 
         right-0 flex flex-col justify-center items-center navBar bg-gray-500/20 shadow-lg backdrop-blur-lg text-white gap-2 font-semibold text-lg transform transition-transform ${
           isMenuOpen ? "flex" : "hidden"
         } `}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <div  onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer">
          <Link to="/">00 Home</Link>
        </div>
        <div  onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer">
          <Link to="/destination"> 01 Destination</Link>
        </div>
        <div  onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer">
          <Link to="/crew">02 Crew</Link>
        </div>
        <div  onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer">
          <Link to="/technology"> 03 Technology</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
