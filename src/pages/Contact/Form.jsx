import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
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
      <Link className="ml-1 mt-1 pt-3 text-white hover:text-white pb-3 pl-56 pr-52 text-center items-center bg-[#9b46e4] hover:bg-[] ">Send</Link>
    </Box>
  );
}

export default Form;
