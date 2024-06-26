import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, FormControl, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'; // Assuming Sidebar component is imported

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: 'linear-gradient(to bottom right, #000000, #333333)', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar style={{ paddingLeft: '16px' }}> {/* Adjusted left padding */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar} // Toggle sidebar visibility
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            Network Planning System (NPS)
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}> {/* Align items to the right */}
            <FormControl variant="outlined" sx={{ mr: 2, minWidth: 200 }}>
              <Select
                defaultValue=""
                displayEmpty
                style={{ color: '#ffffff' }}
              >
                <MenuItem value=""><em>Select a vendor</em></MenuItem>
                {/* Add vendors here */}
                <MenuItem value="vendor1">Vendor 1</MenuItem>
                <MenuItem value="vendor2">Vendor 2</MenuItem>
                <MenuItem value="vendor3">Vendor 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ mr: 2, minWidth: 200 }}>
              <Select
                defaultValue=""
                displayEmpty
                style={{ color: '#ffffff' }}
              >
                <MenuItem value=""><em>Select a family code</em></MenuItem>
                {/* Add family codes here */}
                <MenuItem value="family1">Family Code 1</MenuItem>
                <MenuItem value="family2">Family Code 2</MenuItem>
                <MenuItem value="family3">Family Code 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <Select
                defaultValue=""
                displayEmpty
                style={{ color: '#ffffff' }}
              >
                <MenuItem value=""><em>Select a site</em></MenuItem>
                {/* Add sites here */}
                <MenuItem value="site1">Site 1</MenuItem>
                <MenuItem value="site2">Site 2</MenuItem>
                <MenuItem value="site3">Site 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} /> {/* Pass state and toggle function to Sidebar */}
    </>
  );
};

export default Header;

