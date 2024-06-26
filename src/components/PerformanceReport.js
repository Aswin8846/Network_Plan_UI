// src/components/PerformanceReport.js
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const PerformanceReport = () => (
  <Container>
    <Paper sx={{ padding: 2, mt: 2 }}>
      <Typography variant="h6">Performance Report Page</Typography>
      {/* Add your content here */}
      <Typography variant="body1">
        This is where you can display performance metrics, charts, or any relevant reports.
      </Typography>
    </Paper>
  </Container>
);

export default PerformanceReport;
