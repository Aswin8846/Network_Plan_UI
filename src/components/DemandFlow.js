// src/components/DemandFlow.js
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const DemandFlow = () => (
  <Container>
    <Paper sx={{ padding: 2, mt: 2 }}>
      <Typography variant="h6">Demand Flow Page</Typography>
      {/* Add your content here */}
      <Typography variant="body1">
        This is where you can describe the demand flow process or display relevant information.
      </Typography>
    </Paper>
  </Container>
);

export default DemandFlow;
