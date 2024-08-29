import { useEffect, useState } from "react";

import { crew } from "../../data.json";


const Crew = () => {
  const [crewData] = useState(crew);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const currentCrew = crewData[index];

  //handleCilck function
  const handleTabClick = (args) => {
    setActiveTab(args);
    setIndex(args);
  };


  return (
    <div className="bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop bg-cover bg-center mx-auto min-h-screen mt-[-6rem] flex flex-col pt-[7rem]  md:pb-[5.5rem] gap-10 lg:pt-[10rem] ">
      <h1 className="font-barlow-con text-lg text-white text-center md:pl-8 flex gap-5 lg:pl-[4rem] xl:pl-[5.5rem] 2xl:pl-[10rem] items-center md:items-start md:text-left">
        <span>02</span>
        <span>MEET YOUR CREW</span>
      </h1>

      <div className="flex flex-col md:flex-col-reverse items-center  lg:items-start gap-3 md:gap-[7rem]  lg:flex-row-reverse lg:px-8 xl:px-16 lg:gap-[7rem] xl:gap-[22rem] lg:justify-center lg:pt-[6rem]">
        <div className="w-[327px] h-[223px] flex flex-col justify-center items-center md:py-10">
          <img
            className="h-[250px] w-[177.12px] md:h-[400px] md:w-[300px] "
            src={currentCrew.images.webp}
            alt=""
          />
          <hr className="w-[80%] md:hidden" />
        </div>

        <div className=" flex flex-col md:flex-col-reverse items-center justify-center lg:items-start gap-4">
          <section className="flex gap-6 pt-6 md:pt-[3.5rem]">
            <div
              className={`w-[0.8rem] h-[0.8rem] rounded-full ${
                activeTab === 0 ? "bg-gray-200" : "bg-gray-400"
              } hover:bg-white`}
              onClick={() => handleTabClick(0)}
            ></div>
            <div
              className={`w-[0.8rem] h-[0.8rem] rounded-full ${
                activeTab === 1 ? "bg-blue-500" : "bg-gray-400"
              } hover:bg-white`}
              onClick={() => handleTabClick(1)}
            ></div>
            <div
              className={`w-[0.8rem] h-[0.8rem] rounded-full ${
                activeTab === 2 ? "bg-gray-200" : "bg-gray-400"
              } hover:bg-white`}
              onClick={() => handleTabClick(2)}
            ></div>
            <div
              className={`w-[0.8rem] h-[0.8rem] rounded-full ${
                activeTab === 3 ? "bg-gray-200" : "bg-gray-400"
              } hover:bg-white`}
              onClick={() => handleTabClick(3)}
            ></div>
          </section>
          <div className="flex flex-col items-center justify-center lg:items-start text-white lg:relative">
            <div className="flex flex-col items-center justify-center lg:items-start py-6 md:py-3 font-bellefair gap-2 lg:left-0">
              <h4 className="lg:text-2xl">{currentCrew.role.toUpperCase()}</h4>
              <h3 className="text-2xl lg:text-5xl">{currentCrew.name.toUpperCase()}</h3>
            </div>
            <p className="text-center p-5 font-barlow md:w-[458px] md:h-[84px] lg:text-left lg:px-0 ">{currentCrew.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
