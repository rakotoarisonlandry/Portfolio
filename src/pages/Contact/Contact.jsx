import { Box, Container } from "@mui/material";
import Form from "./Form";
import React from "react";
import { Typography } from "@mui/material";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import respect from "../../../public/assets/img/92f66ceb28916af6e1aeb8d5e8054f3c-1000x640.jpg";
function Contact() {
  return (
    <Box className="Contact-Container ml-[360px] h-[100vh] w-[140vh] ">
      <Container className="text-center">
        <Typography
          variant="h5"
          className="Contact-Title pb-20 pt-10 font-extrabold"
        >
          Contact Me
        </Typography>
      </Container>
      <Box className="flex Content-Contact">
        <Box className="w-[40vh] mr-48 text-justify info-Contact">
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
            <Typography variant="Body1" className="font-extrabold typo">
              RAKOTOARISON Tsaraefadahy Landry Brigea
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" className="pb-3 typo">
              I am available for freelance work. Connect with me via Email and
              call in to my account
            </Typography>
          </Box>
          <Typography variant="body2" className="flex space-x-5">
            <FaPhoneAlt />
            <Box className="font-bold">+261340508180</Box>
          </Typography>
          <Typography
            variant="body2"
            className="flex space-x-5 justify-center items-center"
          >
            <MdAttachEmail  />
            <Box className="typo">Rakotorisonlandry@gmail.com</Box>
          </Typography>
          <Typography variant="body2" className="pt-3 pb-3 typo">
            FIND ME WITH
          </Typography>
          <Box className="flex space-x-3">
            <Link className="border-[1px] rounded-full p-3 border-[#9b46e4] hover:bg-[#9b46e4] hover:text-[#fff]">
              <FaFacebookF />
            </Link>
            <Link className="border-[1px] rounded-full p-3 border-[#9b46e4] hover:bg-[#9b46e4] hover:text-[#fff]">
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://github.com/rakotoarisonlandry"
              className="border-[1px] rounded-full p-3 border-[#9b46e4] hover:bg-[#9b46e4] hover:text-[#fff]"
            >
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
