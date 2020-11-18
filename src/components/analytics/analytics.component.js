import React from 'react';
import { BarChart, Bar,ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend } from 'recharts';

const data01 = [
  { x: 5, y: 0, z: 200 }, { x: 23, y: 0.4, z: 260 },
  { x: 10, y: 0.5, z: 400 }, { x: 29, y: 0.6, z: 280 },
  { x: 15, y: 0.7, z: 500 }, { x: 41, y: 0.4, z: 200 },
];
const data02 = [
  { x: 20, y: 0.4, z: 240 }, { x: 24, y: 0.9, z: 220 },
  { x: 19, y: 0.2, z: 250 }, { x: 18, y: 0.8, z: 210 },
  { x: 18, y: 0.3, z: 260 }, { x: 21, y: 0.1, z: 230 },
];

const barChartData = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
];

export default function Analytics() {
  return (
    <div className='location-block'>
      <div className='p-3'>
        <br/>
        <h6>Events per Hour</h6>
        <hr/>
        <ScatterChart
          width={300}
          height={250}
          margin={{
          top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <XAxis type="number" dataKey="x" domain={[0, 'dataMax']} name="Floor" axisLine={false} tick={false} />
          <YAxis type="number" dataKey="y" name="Time before" unit="hr" axisLine={false} tick={false} />
          <ZAxis type="number" dataKey="z" range={[60, 400]} name="people" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend horizontalAlign="center" />
          <Scatter name="A school" data={data01} fill="#8884d8" shape="cirlce" />
          <Scatter name="B school" data={data02} fill="#82ca9d" shape="circle" />
        </ScatterChart>
        <br/>
        <br/>
        <h6>Events per Hour</h6>
        <hr/>
        <br/>
        <BarChart width={300} height={250} data={barChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        <br/>
        <h6>Traffic</h6>
        <hr/>
      </div>
    </div>
  )
}

