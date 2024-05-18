import { Box } from "@mui/material";
import React from "react";
import {Typography} from "@mui/material";
import Landry from "../../../public/assets/img/landry.png";
function About() {
  return (
    <Box className="ml-[350px] h-full">
      <Box className="border-[#8720DF] shadow-lg shadow-[#8720DF]/50 overflow-hidden pt-7 border-[5px] rounded-[37px]">
        <img src={Landry} alt="" />
      </Box>
      <Box>
          
      </Box>
    </Box>
  );
}

export default About;
