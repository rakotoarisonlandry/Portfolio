import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import HomeComponent from "./HomeComponent";
import Blur from "../../../public/assets/img/blur.svg";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import hello from "../../../public/assets/img/stock-vector-hi-hello-banner-speech-bubble-poster-and-sticker-concept-with-text-hello-white-bubble-message-1505210795-removebg-preview.png";
import portrait from "../../../public/assets/img/test.svg";
import Contact from "../Contact/Contact";
import About from "../About/About";
import { MdFileDownload } from "react-icons/md";
import SocialLink from "../../component/socialicon/SocialLink";
function Home() {
  return (
    <Box>
      <img src={Blur} alt="" className="Home-img-blur" />
      <Box className="Home-Body">
        <SocialLink />
        <Box className="Home-container">
          <img src={hello} alt="" className="Home-hello " />
          <Typography variant="h4" fontWeight="900" className= " Home-Title">
            <span>I'm</span> Landry RAKOTOARISON
          </Typography>
          <TypeAnimation
            sequence={["Developer", 1000, "Developer & Designer", 1000]}
            speed={50}
            wrapper="h4"
            repeat={Infinity}
            className="Home-Title-typical"
          />
          <Typography variant="body1" className="Typo-body1">
            IT student at ENI
          </Typography>
          <Typography variant="body2" className="Typo-body2">
            Explore my diverse range of projects where creativity and technology
            intersect, and get inspired! I hope you enjoy discovering my work as
            much as I enjoyed creating it.
          </Typography>
          <Box className="flex items-center space-x-8">
            <Link className="home-Link " to="/contact">
              <button className="home-Button flex">
                <MdOutlinePermContactCalendar className="text-[20px] mr-3" />
                Contact Me
              </button>
            </Link>
            <Link className="font-bold text-[#9b46e4] z-20 cursor-pointer hover:underline hover:text-[#fff] flex">
              Mon CV <MdFileDownload className="text-[20px] ml-3" />
            </Link>
          </Box>
        </Box>
        <img src={portrait} alt="" className="Home-portrait" />
      </Box>
      <HomeComponent />
    </Box>
  );
}

export default Home;
