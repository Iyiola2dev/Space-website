import React from "react";

const Home = () => {
  return (
    <div className=" bg-mobile  bg-cover bg-center h-screen min-h-screen md:bg-tablet mt-[-6rem] flex flex-col items-center justify-center  mx-auto  text-center lg:text-justify lg:items-start  md:gap-20  lg:bg-desktop lg:flex-row lg:space-x-32 lg:pt-24 xl:space-x-72 xl:pt-56">
      
      <div className=" flex flex-col items-center justify-center lg:items-start  text-center lg:text-left md:w-[450px] md:h-[334px]  pt-5 md:pt-10 gap-3 md:gap-[4.5rem] lg:gap-[2rem] lg:mt-[10rem] xl:w-[450px] xl:h-[450px] ">
        <p className=" h-[19px] lg:text-left md:h-[24px] w-[100%] text-[16px] text-[#D0D6F9] md:text-[20px]  font-[400] lg:px-4 xl:w-[110%] xl:h-[34px] xl:text-[28px] font-barlow-con">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h2 className="w-[327px] font-[400]  h-[100px] lg:px-4 md:w-[445px] text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] text-[#FFFFFF] xl:h-[172px] font-bellefair ">
          SPACE
        </h2>
        <p className="w-[327px] font-[400] h-[125px] text-center lg:text-left  md:w-[125%] md:h-[112px] text-[#D0D6F9] text-[15px] md:text-[18px] leading-[25px]  md:leading-[28px] px-4 lg:mt-10">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="w-[150px] h-[150px] md:w-[242px] md:h-[242px] rounded-full p-3  md:mt-[5rem] bg-white mt-[3.5rem] flex justify-center items-center lg:mt-[17rem] xl:w-[274px] xl:h-[274px] xl:mt-[20rem]">
        <p className="text-[20px] md:text-[32px] font-bellefair ">EXPLORE</p>
      </div>
    </div>
  );
};

export default Home;
