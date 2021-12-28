import React from 'react';
import {
  LineChart as LineRechart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const LineChart = ({statData}) => {
  return (
    <ResponsiveContainer width="99%" height={500}>
      <LineRechart
        width={500}
        height={300}
        data={statData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="updated" />
        <YAxis />
        <Tooltip />
        <Legend wrapperStyle={{position: 'relative'}} />
        <Line type="monotone" dataKey="deceased" stroke="#8884d8" activeDot={{r: 8}} />
        {/* <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />*/}
      </LineRechart>
    </ResponsiveContainer>
  );
};

export default LineChart;
