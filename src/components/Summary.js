import React, { useState } from 'react';
import { Container, Button, TextField, Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Box, TableContainer, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import EventIcon from '@mui/icons-material/Event'; // Import calendar icon

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));

const Summary = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container sx={{ width: '100%', mt: 2, background: 'linear-gradient(to bottom right, #000000, #333333)', padding: '16px', borderRadius: '8px', marginLeft: '16px' }}>
      <Paper sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Tabs value={activeTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
          <Tab label="Summary" sx={{ color: activeTab === 0 ? '#2196f3' : '#f44336' }} />
          <Tab label="Transfers" sx={{ color: activeTab === 1 ? '#2196f3' : '#f44336' }} />
        </Tabs>
        <Box sx={{ pt: 2 }}>
          {activeTab === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom style={{ color: '#ffffff' }}>Summary</Typography>
              <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
                <Table sx={{ minWidth: 650 }} aria-label="summary table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Source</StyledTableCell>
                      <StyledTableCell>Destination</StyledTableCell>
                      <StyledTableCell>Week Date</StyledTableCell>
                      <StyledTableCell>Quantity</StyledTableCell>
                      <StyledTableCell>SKUs_Count</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Example row */}
                    <TableRow>
                      <TableCell style={{ color: '#ffffff' }}>Example Source</TableCell>
                      <TableCell style={{ color: '#ffffff' }}>Example Destination</TableCell>
                      <TableCell style={{ color: '#ffffff' }}>2024-01-01</TableCell>
                      <TableCell style={{ color: '#ffffff' }}>100</TableCell>
                      <TableCell style={{ color: '#ffffff' }}>10</TableCell>
                    </TableRow>
                    {/* Repeat for each data row */}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <Button variant="contained" color="primary">Download</Button>
                <TextField
                  label="Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                    style: { color: '#ffffff' }
                  }}
                  InputProps={{
                    style: { color: '#ffffff' },
                    endAdornment: (
                      <Box
                        component="span"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          position: 'absolute',
                          right: 8,
                          top: 8,
                          cursor: 'pointer',
                          zIndex: 1,
                        }}
                        onClick={() => {
                          const input = document.getElementById('date-picker-input');
                          if (input) {
                            input.focus();
                          }
                        }}
                      >
                        <EventIcon style={{ color: '#ffffff' }} />
                      </Box>
                    )
                  }}
                  id="date-picker-input"
                  sx={{ ml: 2, width: 220 }}
                />
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>Generate SAP Files</Button>
              </Box>
            </Box>
          )}
          {activeTab === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom style={{ color: '#ffffff' }}>Transfers</Typography>
              <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
                <Table sx={{ minWidth: 650 }} aria-label="transfers table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Transfer ID</StyledTableCell>
                      <StyledTableCell>Source</StyledTableCell>
                      <StyledTableCell>Destination</StyledTableCell>
                      <StyledTableCell>Date</StyledTableCell>
                      <StyledTableCell>Status</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Example row */}
                    <TableRow>
                      <TableCell style={{ color: '#ffffff' }}>12345</TableCell>
                      <TableCell style={{ color: '#ffffff' }}>Example Source</TableCell>
                      <TableCell style={{ color: '#ffffff' }}>Example Destination</TableCell>
                      <TableCell style={{ color: '#ffffff' }}>2024-01-01</TableCell>
                      <TableCell style={{ color: '#ffffff' }}>Completed</TableCell>
                    </TableRow>
                    {/* Repeat for each data row */}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Summary;
