import React from 'react';
import {
  BarChart as BarRechart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const BarChart = ({statData}) => {
  const processBarChartData = (statData) => {
    const filterByNotOlderThanHalfYear = (arr) => {
      return arr.filter(({updated}) => new Date(updated) > new Date().setMonth(8));
    };
    return filterByNotOlderThanHalfYear(statData.map((stat) => {
      return {...stat, updated: stat.updated.slice(0, 10)};
    }));
  };

  const barChartData = processBarChartData(statData);

  return (
    <ResponsiveContainer width="99%" height={500}>
      <BarRechart
        width={500}
        height={300}
        data={barChartData}
        margin={{
          top: 20,
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
        <Bar dataKey="infected" stackId="a" fill="#8884d8" />
        <Bar dataKey="recovered" stackId="a" fill="#82ca9d" />
        <Bar dataKey="deceased" fill="#ffc658" />
      </BarRechart>
    </ResponsiveContainer>
  );
};

export default BarChart;
