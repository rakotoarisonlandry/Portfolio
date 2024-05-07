import { Box } from "@mui/material";
import React from "react";
import hello from "../../../public/assets/img/stock-vector-hi-hello-banner-speech-bubble-poster-and-sticker-concept-with-text-hello-white-bubble-message-1505210795-removebg-preview.png";
import portrait from "../../../public/assets/img/Group 6.svg";
import Blur from "../../../public/assets/img/Ellipse 2.svg";
import Typical from "react-typical";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeComponent from "./HomeComponent";
function Home() {
  return (
    <Box>
      <Box>
        <img src={Blur} alt="" className="Home-img-blur" />
        <Box className="Home-Body">
          <Box className="Home-container">
            <img src={hello} alt="" className="Home-hello" />
            <Typography variant="h4" fontWeight="900" className="Home-Title">
              <span>I'm</span> Landry RAKOTOARISON
            </Typography>
            <Typical
              steps={["Developer", 1000, "Developer & Designer", 1000]}
              loop={Infinity}
              wrapper="h4"
              className="Home-Title-typical"
            />
            <Typography variant="body1" className="Typo-body1">
              IT student at ENI
            </Typography>
            <Typography variant="body2" className="Typo-body2">
              Explore my diverse range of projects where creativity and
              technology intersect, and get inspired! I hope you enjoy
              discovering my work as much as I enjoyed creating it.
            </Typography>
            <Link className="home-Link">
              <button className="home-Button">Contact Me</button>
            </Link>
          </Box>
          <img src={portrait} alt="" className="Home-portrait" />
        </Box>
      </Box>
      <HomeComponent/>
    </Box>
  );
}

export default Home;
