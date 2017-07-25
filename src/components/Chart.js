import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Chart({ data }) {
    return (
        <AreaChart width={730} height={250} data={data}>
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="100%" stopColor="#8884d8" stopOpacity={0.2}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="x" type="number" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="stepAfter" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#gradient)" />
        </AreaChart>
    );
}
