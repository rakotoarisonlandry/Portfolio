import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const skillsImage = (skill) => {
  return { src: skill.img };
};

function LastProject() {
  const skillsData = [
    {
      index: "1",
      img: "/assets/img/Blog.PNG", // Ensure the image path is correct relative to your public folder
      title: "Blog App",
    },
    {
      index: "2",
      img: "/assets/img/IHM.PNG", // Ensure the image path is correct relative to your public folder
      title: "E-commerce",
    },
    {
      index: "3",
      img: "/assets/img/team.PNG", // Ensure the image path is correct relative to your public folder
      title: "Portfolio team",
    },
    {
      index: "4",
      img: "/assets/img/chatt.PNG", // Ensure the image path is correct relative to your public folder
      title: "E-resaka",
    },
  ];

  return (
    <Box className="h-[100vh]">
      <Box className=" text-center ml-10 pt-7 pb-4 ">
        <h5  className="2xl:text-[30px]">My latest Project</h5>
      </Box>
      <Box className=" pb-7 text-center ">
        <p   >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Box>
      <Box className="w-[175vh] 2xl:w-[180vh] h-full ml-[230px]  my-12">
        <Marquee
          gradient={false}  
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill) => (
            <Box
              className="w-24 2xl:w-52 min-w-fit h-80 2xl:h-[50vh] flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.1] cursor-pointer"
              key={skill.index}
            >
              <Box className="h-full 2xl:h-[80vh] w-80 2xl:w-[50vh] rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <Box className="flex -translate-y-[1px] justify-center">
                  <Box className="w-3/4">
                    <Box className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </Box>
                </Box>
                <Box className="flex flex-col  gap-3 p-6">
                  <Box className="h-8 sm:h-10">
                    <img
                      src={skill.img}
                      alt={skill.title}
                      className="rounded-lg w-[100%] h-auto pb-9"
                    />
                  </Box>
                  <p className="text-white text-sm sm:text-lg pt-[145px]">{skill.title}</p>
                </Box>
                <Box className="mx-7 flex space-x-7">
                  <Box>
                    <Link to="nyhavana.onrender.com" className="text-[#4CFBF6] text-[10px]">Demo</Link>
                  </Box>
                  <Box className=" ">
                    <Link className="text-[10px] text-[#fff] pt-1 pb-1 pl-3 pr-3 hover:bg-[#4CFBF6] hover:text-black rounded-xl bg-[#8720DF]">repos</Link>
                  </Box>
                </Box>
              </Box>  
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
}

export default LastProject;
