import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Typography } from "@mui/material";
function SocialLink() {
  return (
    <Box className="fixed left-96 space-y-3 block text-left ml-[-120px] mr-11">
      <Link className="  p-3  border-[#9b46e4]  hover:text-[#fff]">
        <FaFacebookF />
      </Link>
      <Link className="  p-3 border-[#9b46e4] ] hover:text-[#fff]">
        <FaLinkedinIn />
      </Link>
      <Link
        to="https://github.com/rakotoarisonlandry"
        className="  p-3 border-[#9b46e4] hover:text-[#fff]"
      >
        <FiGithub />
      </Link>
      <Box
        style={{
          marginBottom: "30px",
          height: "50px",
          backgroundColor: "#fff",
          width: "2px",
          marginLeft:'6px'
        }}
      ></Box>
      <Typography
        variant="body2"
        sx={{ ml: "-32px" }}
        className=" rotate-[-90deg] w-20 text-[#fff] text-[15px]"
      >
        Follow me
      </Typography>
    </Box>
  );
}

export default SocialLink;
