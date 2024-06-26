// src/components/BarChartComponent.js

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = () => {
  // Example data (replace with your actual data)
  const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 2000 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 4000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#2196f3" /> {/* Change fill color to blue (#2196f3) */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
