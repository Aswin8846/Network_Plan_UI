// // src/components/Sidebar.js
// import React from 'react';
// import { Drawer, List, ListItem, ListItemText, Toolbar, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Sidebar = () => (
//   <Drawer
//     variant="permanent"
//     sx={{
//       width: 240,
//       flexShrink: 0,
//       marginTop: '64px', // Adjust to move below the header
//       '& .MuiDrawer-paper': {
//         width: 240,
//         background: 'linear-gradient(to bottom right, #000000, #333333)', // Linear gradient black background
//         color: '#ffffff', // White text color
//       },
//     }}
//   >
//     <Toolbar />
//     <List sx={{ py: 2 }}>
//       <ListItem disablePadding>
//         <Button
//           component={Link}
//           to="/network-plan"
//           variant="contained"
//           sx={{ borderRadius: '20px', width: '100%', backgroundColor: 'transparent', color: '#ffffff', mt: 2 }}
//         >
//           Network Plan
//         </Button>
//       </ListItem>
//       <ListItem disablePadding>
//         <Button
//           component={Link}
//           to="/demand-flow"
//           variant="contained"
//           sx={{ borderRadius: '20px', width: '100%', backgroundColor: 'transparent', color: '#ffffff', mt: 2 }}
//         >
//           Demand Flow
//         </Button>
//       </ListItem>
//       <ListItem disablePadding>
//         <Button
//           component={Link}
//           to="/performance-report"
//           variant="contained"
//           sx={{ borderRadius: '20px', width: '100%', backgroundColor: 'transparent', color: '#ffffff', mt: 2 }}
//         >
//           Performance Report
//         </Button>
//       </ListItem>
//     </List>
//   </Drawer>
// );

// export default Sidebar;
// src/components/Sidebar.js
// src/components/Sidebar.js
// src/components/Sidebar.js
// src/components/Sidebar.js


// src/components/Sidebar.js
// src/components/Sidebar.js
// src/components/Sidebar.js
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Button,
  Collapse,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [statsOpen, setStatsOpen] = useState(false);

  const toggleStats = () => {
    setStatsOpen(!statsOpen);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        marginTop: '64px', // Adjust to move below the header
        '& .MuiDrawer-paper': {
          width: 240,
          background: 'linear-gradient(to bottom right, #000000, #333333)', // Linear gradient black background
          color: '#ffffff', // White text color
        },
      }}
    >
      <Toolbar />
      <List sx={{ py: 2 }}>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/network-plan"
            variant="contained"
            sx={{
              borderRadius: '20px',
              width: '100%',
              backgroundColor: 'transparent',
              color: '#ffffff',
              mt: 2,
            }}
          >
            Network Plan
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/demand-flow"
            variant="contained"
            sx={{
              borderRadius: '20px',
              width: '100%',
              backgroundColor: 'transparent',
              color: '#ffffff',
              mt: 2,
            }}
          >
            Demand Flow
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/performance-report"
            variant="contained"
            sx={{
              borderRadius: '20px',
              width: '100%',
              backgroundColor: 'transparent',
              color: '#ffffff',
              mt: 2,
            }}
          >
            Performance Report
          </Button>
        </ListItem>
        {/* Stats section */}
        <ListItem disablePadding>
          <Button
            variant="contained"
            onClick={toggleStats}
            sx={{
              borderRadius: '20px',
              width: '100%',
              backgroundColor: 'transparent',
              color: '#ffffff',
              mt: 2,
            }}
          >
            Stats
          </Button>
        </ListItem>
        <Collapse in={statsOpen} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemText
                primary="Stats"
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Total Users:"
                secondary="100"
                primaryTypographyProps={{ color: 'white' }}
                secondaryTypographyProps={{ color: 'white' }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Active Plans:"
                secondary="50"
                primaryTypographyProps={{ color: 'white' }}
                secondaryTypographyProps={{ color: 'white' }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Completed Plans:"
                secondary="30"
                primaryTypographyProps={{ color: 'white' }}
                secondaryTypographyProps={{ color: 'white' }}
              />
            </ListItem>
            {/* Add more stats as needed */}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;

