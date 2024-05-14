import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
function Form() {
  return (
    <Box className="Form-Container">
      <Box className="Form-First-input-Flex">
        <Box className="single-Form">
          <label htmlFor="name">Your Name</label>
          <Box>
            <input
              className="input-form"
              type="text"
              id="name"
              placeholder="ex: Rakoto"
            />
          </Box>
        </Box>
        <Box className="single-Form">
          <label htmlFor="phoneNumber">Phone Number</label>
          <Box>
            <input
              className="input-form"
              type="text"
              id="phoneNumber"
              placeholder="xxxxxxxxxx"
            />
          </Box>
        </Box>
      </Box>
      <Box className="single-Form">
        <label htmlFor="email">Email</label>
        <Box>
          <input
            className="input-form"
            type="text"
            id="email"
            placeholder="example@gmail.com"
          />
        </Box>
      </Box>
      <Box className="single-Form">
        <label htmlFor="subject">Subject</label>
        <Box>
          <input
            className="input-form"
            type="text"
            id="subject"
            placeholder="Lorem"
          />
        </Box>
      </Box>
      <Box className="single-Form">
        <label htmlFor="message">Message</label>
        <Box>
          <textarea
            className="input-form-last"
            id="message"
            placeholder="Lorem"
          ></textarea>
        </Box>
      </Box>
      <Link className="send-Form">
        Send
      </Link>
    </Box>
  );
}

export default Form;
