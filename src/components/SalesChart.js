// src/components/SalesChart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesChart = () => {
  // Example sales data (replace with your actual data)
  const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 2000 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 4000 },
    { name: 'Jul', sales: 8000 },
    { name: 'Aug', sales: 7000 },
    { name: 'Sep', sales: 9000 },
    { name: 'Oct', sales: 10000 },
    { name: 'Nov', sales: 6000 },
    { name: 'Dec', sales: 12000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#2196f3" activeDot={{ r: 8 }} /> {/* Change stroke color to blue (#2196f3) */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
