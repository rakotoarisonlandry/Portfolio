import { Box } from "@mui/material";
import React from "react";
import Landry from "../../../public/assets/img/landry.png";
function About() {
  return (
    <Box className="ml-[350px]">
      <Box className="border-[#8720DF] overflow-hidden pt-7 border-[5px] rounded-[37px]">
        <img src={Landry} alt="" className="w-80" />
      </Box>
    </Box>
  );
}

export default About;
