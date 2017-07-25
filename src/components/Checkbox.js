import React, { Component } from 'react';
import { StyledLabel } from '../styled';
 
export default function Checkbox({ label, checked, onChange }) {
  return (
    <StyledLabel>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
      {label}
    </StyledLabel>
  );
}
