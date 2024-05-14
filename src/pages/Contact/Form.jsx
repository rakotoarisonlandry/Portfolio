import { Box } from '@mui/material'
import React from 'react'

function Form() {
  return (
    <Box>
      <Box>
        <label htmlFor="name">Nom</label>
        <input type="text" placeholder='Votre nom'/>
      </Box>
    </Box>
  )
}

export default Form