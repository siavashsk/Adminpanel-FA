import React from "react";
import "./chart.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

export default function Chart({data, grid,dataKey}) {
  return (
    <div className="chart">
      <h2 className="chartTitle">عملکرد</h2>
      <div className="chartWrapper">
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#fff" />
            <Line type="monotone" dataKey={dataKey} stroke="#fff" />
            <Tooltip />
            {/* {grid && <CartesianGrid  strokeDasharray="3 3" />} */}
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
