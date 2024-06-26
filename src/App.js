import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Summary from './components/Summary';
import DemandFlow from './components/DemandFlow';
import PerformanceReport from './components/PerformanceReport';
import SalesChart from './components/SalesChart'; // Import SalesChart component
import BarChartComponent from './components/BarChartComponent'; // Import BarChartComponent
import PieChartComponent from './components/PieChartComponent'; // Import PieChartComponent
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: '16px', marginTop: '64px', marginLeft: '-250px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Routes>
              {/* Redirect to /network-plan */}
              <Route path="/" element={<Navigate to="/network-plan" />} />
              <Route path="/network-plan" element={<NetworkPlan />} />
              <Route path="/demand-flow" element={<DemandFlow />} />
              <Route path="/performance-report" element={<PerformanceReport />} />
            </Routes>
          </main>
          <aside style={{ width: '300px', marginLeft: '100px', marginTop: '80px' }}>
            <PieChartComponent /> {/* Display PieChartComponent in the right sidebar */}
          </aside>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function NetworkPlan() {
  return (
    <React.Fragment>
      <Summary /><br/>
      <BarChartComponent />
    </React.Fragment>
  );
}

export default App;

