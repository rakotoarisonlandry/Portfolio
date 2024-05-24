import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import Landry from "../../../public/assets/img/landry.png";
import about from "../../../public/assets/img/about.svg";
import education from "../../../public/assets/img/Education.svg";
function About() {
  return (
    <Box className="ml-[350px] flex  mt-32 space-x-52 h-full">
      <Box className="border-[#8720DF] shadow-lg shadow-[#8720DF]/50 overflow-hidden pt-7 border-[5px] rounded-[37px]">
        <img src={Landry} alt="" className=" 2xl:w-[400px]" />
      </Box>
      <Box>
        <Box>
          <img src={about} alt="" className=" 2xl:w-[130px]" />
        </Box>
        <Box className="font-extrabold ">
          <Typography variant="body1" >
            RAKOTOARISON Tsaraefadahy Landry Brigea
          </Typography>
        </Box>
        <Box>
          <img src={education} alt="" className=" 2xl:w-[130px]" />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
