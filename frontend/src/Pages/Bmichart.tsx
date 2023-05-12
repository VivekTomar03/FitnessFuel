import React, { useEffect, useState } from "react";
import "./bmichart.css";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const data01 = [
  { name: "Under Weight(0-15)", value: 15 },
  { name: "Normal Wieght(16-30)", value: 30 },
  { name: "Over Weight(30+)", value: 50 },
];

const COLORS = ["#ff6f00", "#00724a", "#ff0000", "#FF8042"];

const Bullet = ({ backgroundColor, size }: any) => {
  return (
    <div
      className="CirecleBullet"
      style={{
        backgroundColor,
        width: size,
        height: size,
      }}
    ></div>
  );
};
const CustomLabel = ({ viewBox, labelText, value }: any) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="15"
      >
        {labelText}
      </text>
      <text
        x={cx}
        y={cy + 20}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#0088FE"
        fontSize="26"
        fontWeight="600"
      >
        {value}
      </text>
    </g>
  );
};
const CustomizedLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="LegendList">
      {payload.map((entry: any, index: any) => (
        <li key={`item-${index}`}>
          <div className="BulletLabel">
            <Bullet backgroundColor={entry.payload.fill} size="10px" />
            <div className="BulletLabelText">{entry.value}</div>
          </div>
          <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div>
        </li>
      ))}
    </ul>
  );
};
export default function Bmichart({  ybmi }: any) {
  
  console.log(ybmi);
  return (
    <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={80}
            outerRadius={100}
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              content={<CustomLabel labelText="BMI" value={ybmi.toFixed(2)} />}
              position="center"
            />
          </Pie>
          <Legend content={<CustomizedLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
