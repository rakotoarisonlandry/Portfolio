import { Box, Container } from "@mui/material";
import Form from "./Form";
import React from "react";
import { Typography } from "@mui/material";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import respect from "../../../public/assets/img/92f66ceb28916af6e1aeb8d5e8054f3c-1000x640.jpg";
function Contact() {
  return (
    <Box className="ml-[350px] h-[100vh] w-[140vh]">
      <Container className="text-center">
        <Typography variant="h5" className="pb-32 pt-10 font-extrabold">
          Contact Me
        </Typography>
      </Container>
      <Box className="flex ">
        <Box className="w-[40vh] mr-48 text-justify">
          <Box className="rounded-[5px] pb-3">
            <img
              src={respect}
              alt=""
              className="rounded-[15px]"
              width="300px"
              height="170px"
            />
          </Box>
          <Box className="pb-4">
            <Typography variant="Body1" className="font-extrabold ">
              RAKOTOARISON Tsaraefadahy Landry Brigea
            </Typography>
          </Box>
          <Typography variant="body2" className="pb-3">
            I am available for freelance work. Connect with me via Email and
            call in to my account
          </Typography>
          <Typography variant="body2" className="">
            Phone: <span className="">+261340508180</span>
          </Typography>
          <Typography variant="body2" className="">
            Emails: <span className="">Rakotorisonlandry@gmail.com</span>
          </Typography>
          <Typography variant="body2" className="pt-3 pb-3">
            FIND ME WITH
          </Typography>
          <Box className="flex space-x-4">
            <Link className="">
              <FaFacebookF />
            </Link>
            <Link className="">
              <FaLinkedinIn />
            </Link>
            <Link to="https://github.com/rakotoarisonlandry" className="">
              <FiGithub />
            </Link>
          </Box>
        </Box>
        <Box>
          <Form />
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
