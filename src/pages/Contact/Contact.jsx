import { Box, Container } from "@mui/material";
import Form from "./Form";
import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <Container className="Contact-Container">
      <Typography variant="H2" className="contact-Title">
        Contact Me
      </Typography>
      <Box className="Form-contact-container">
        <Box>
          <img src="" alt="" />
          <Typography>RAKOTOARISON Tsaraefadahy Landry Brigea</Typography>
          <Typography>
            I am available for freelance work. Connect with me via Email and
            call in to my account
          </Typography>
          <Typography>
            Phone <span>+261340508180</span>
          </Typography>
          <Typography>
            Emails <span>Rakotorisonlandry@gmail.com</span>
          </Typography>
          <Typography>FIND ME WITH</Typography>
          <Box>
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </Box>
        </Box>
        <Box>
          <Form />
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
