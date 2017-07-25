import React from 'react';
import { StyledSlider } from '../styled';
 
export default function LiveSlider({ data, onChange }) {
  return (
    <StyledSlider
      value={data.start}
      onChange={(e) => onChange({start: e.target.value * 1, length: data.length})} />
  );
}
