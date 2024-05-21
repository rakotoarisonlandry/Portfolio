// src/App.js
import React from 'react';
import './index.css';
import { Box } from '@mui/material';
import Route from './route/Route';
import './css/index.scss';
import ParticlesComponent from './component/particle/Particle';

function App() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <ParticlesComponent id="particle"/>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Route />
      </Box>
    </Box>
  );
}

export default App;
