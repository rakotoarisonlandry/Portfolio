import { Box } from "@mui/material";
import React from "react";

function Form() {
  return (
    <Box>
      <Box className="flex-input">
        <Box>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="ex:Rakoto" />
        </Box>
        <Box>
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input type="text" placeholder="xxxxxxxxxx" />
        </Box>
      </Box>
        <Box>
          <label htmlFor="Email">Email</label>
          <input type="text" placeholder="example@gmail.com" />
        </Box>
        <Box>
          <label htmlFor="Subject">Subject</label>
          <input type="text" placeholder="Lorem" />
        </Box>
        <Box>
          <label htmlFor="Message">Message</label>
          <input type="text" placeholder="Lorem" />
        </Box>
    </Box>
  );
}

export default Form;
