import React from "react";
import { Box } from "@mui/material";

function Form() {
  return (
    <Box>
      <Box className="Form-First-input">
        <Box>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="ex: Rakoto" />
        </Box>
        <Box>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" placeholder="xxxxxxxxxx" />
        </Box>
      </Box>
      <Box>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="example@gmail.com" />
      </Box>
      <Box>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="Lorem" />
      </Box>
      <Box>
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Lorem"></textarea>
      </Box>
    </Box>
  );
}

export default Form;
