import React from 'react';
import { Chart } from '../components';

const maxX = 120;
const dataMapper = data => {
    let currentValue = 0;
    let lastX = null;
    let tempData = [{x: 0, change: 0}, {x: maxX, change: 0}];
    const mappedData = [];

    data.forEach(item => {
        tempData.push({x: item.start, change: 1});
        tempData.push({x: item.start + item.length, change: -1 });
    });

    tempData.sort((a, b) => a.x - b.x);

    tempData.forEach(item => {
        currentValue += item.change;
        if(lastX === item.x) {
            mappedData[mappedData.length - 1].value = currentValue;
        } else {
            mappedData.push({x: item.x, value: currentValue});
        }
        lastX = item.x;
        currentValue = mappedData[mappedData.length - 1].value;
    });

    return mappedData;
}

export default function ChartContainer({ data }) {
    return (
        <Chart data={dataMapper(data)} />
    );
}
