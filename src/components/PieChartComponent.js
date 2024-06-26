import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 300 },
  { name: 'Category D', value: 200 },
];

const COLORS = ['#2196f3', '#4caf50', '#ffc107', '#f44336']; // Custom colors for each pie slice

const PieChartComponent = () => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8" // Default color for the pie slices (optional)
        label
      >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))
        }
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartComponent;
