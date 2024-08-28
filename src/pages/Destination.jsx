import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Moon from "./Moon";
import Mars from "./Mars";
import Europa from "./Europa";
import Titan from "./Titan";
import destination from "../../data.json";

const Destination = () => {
  const [destinationData] = useState(destination.destinations);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const currentDestination = destinationData[index];

  const handleTabClick = (args) => {
    setActiveTab(args);
    setIndex(args);
  };
 
  return (
    <div className="bg-destinatonMobile  bg-cover bg-center mx-auto min-h-screen mt-[-6rem] md:bg-destinationTablet lg:bg-destinationDesktop flex flex-col pt-[5.5rem] md:pt-[6.5rem] md:pb-[5.5rem] gap-3 md:gap-7">
      <h1 className="font-barlow-con text-lg text-white text-center md:text-left pl-8  flex gap-5 lg:pl-[10rem]">
        <span className="text-[#ffffff]">01</span>
        <span> PICK YOUR DESTINATION</span>
      </h1>

      <div className="flex flex-col items-center gap-3 lg:flex-row lg:px-8 xl:px-16 lg:gap-[7rem] xl:gap-[22rem] lg:justify-center lg:pt-[6rem]">
        <img
          className="h-[300px] w-[300px] xl:h-[445px] xl:w-[445px]"
          src={currentDestination.images.webp}
        />
        <div className="flex flex-col items-center lg:items-start text-white gap-2 w-full ">
          <ul className="flex justify-center px-32 lg:px-0 items-center text-lg font-barlow-con md:text-2xl text-white gap-5 lg:items-start">
            <li
              className={`${activeTab === 0 ? "border-b-2 border-white" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              Moon
            </li>
            <li
              className={`${activeTab === 1 ? "border-b-2 border-white" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Mars
            </li>
            <li
              className={`${activeTab === 2 ? "border-b-2 border-white" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Europa
            </li>
            <li
              className={`${activeTab === 3 ? "border-b-2 border-white" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              Titan
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:items-start ">
            <h1 className=" font-bellefair text-3xl md:text-5xl md:mt-4 lg:text-left ">
              {currentDestination.name.toUpperCase()}
            </h1>
            <p className=" text-center px-10 w-[115%] md:w-[85%] lg:text-left lg:px-0 lg:w-full">
              {currentDestination.description}
            </p>
          </div>
          <hr className="border-b-1 border-white w-[65%] md:mt-6  flex justify-center" />
          <div className="flex flex-col gap-6 md:flex-row md:mt-5 md:gap-[4rem] justify-center ">
            <div className="flex flex-col justify-center items-center lg:items-start ">
              <p className="text-md font-barlow-con">AVG. DISTANCE</p>
              <span className="text-2xl font-bellefair md:text-3xl">
                {currentDestination.distance.toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center  lg:items-start ">
              <p className="text-md font-barlow-con">EST. TRAVEL TIME</p>
              <span className="text-2xl font-bellefair md:text-3xl">
                {currentDestination.travel.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
