import React from 'react';
import groupBy from 'lodash.groupby';

import {
  PieChart as PieRechart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const PieChart = ({statData}) => {
  const COLORS = ['#ab9ede', '#f1c66a', '#cb93cf'];
  const proccessPieChartData = (statData) => {
    return Object.entries(
        groupBy(statData.map((stat) => ({name: stat.updated.slice(0, 4), value: stat.tested})), 'name'))
        .map((groupedStat) => {
          return {
            name: groupedStat[0],
            tested: groupedStat[1].reduce((prev, current) => (prev.value > current.value) ? prev : current).value -
                        groupedStat[1].reduce((prev, current) => (prev.value < current.value) ? prev : current).value,
          };
        });
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = proccessPieChartData(statData);

  return (
    <ResponsiveContainer width="99%" height={500}>
      <PieRechart>
        <Legend wrapperStyle={{position: 'relative'}} />
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          fill="#8884d8"
          dataKey="tested"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieRechart>
    </ResponsiveContainer>
  );
};

export default PieChart;
