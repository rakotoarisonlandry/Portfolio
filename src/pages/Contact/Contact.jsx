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
    <Box className="Contact-Container">
      <Container className="container-Title">
        <Typography variant="H2" className="contact-Title">
          Contact Me
        </Typography>
      </Container>
      <Box className="Form-contact-container">
        <Box className="container-typography">
          <Box className="Img-Contact">
            <img src={respect} alt="" width="300px" height="170px" />
          </Box>
          <Typography className="name-Typography">
            RAKOTOARISON Tsaraefadahy Landry Brigea
          </Typography>
          <Typography variant="caption" className="caption-typo">
            I am available for freelance work. Connect with me via Email and
            call in to my account
          </Typography>
          <Typography variant="body2" className="email-typo">
            Phone: <span className="component-Number">+261340508180</span>
          </Typography>
          <Typography variant="body2" className="email-typo">
            Emails:{" "}
            <span className="component-Number">
              Rakotorisonlandry@gmail.com
            </span>
          </Typography>
          <Typography variant="body2" className="find-typo">
            FIND ME WITH
          </Typography>
          <Box className="social-Link">
            <Link className="Link-component">
              <FaFacebookF />
            </Link>
            <Link className="Link-component">
              <FaLinkedinIn />
            </Link>
            <Link to="https://github.com/rakotoarisonlandry" className="Link-component">
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
