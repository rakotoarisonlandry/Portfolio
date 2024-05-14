import { Box } from "@mui/material";
import React from "react";

function Form() {
  return (
    <Box>
      <Box>
        <Box>
          <label htmlFor="name">Nom</label>
          <input type="text" placeholder="Votre nom" />
        </Box>
        <Box>
          <label htmlFor="firstName">Prenom</label>
          <input type="text" placeholder="Votre Votre Prenom" />
        </Box>
      </Box>
    </Box>
  );
}

export default Form;
