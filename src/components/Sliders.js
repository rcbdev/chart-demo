import React from 'react';
import Slider from './Slider';
import LiveSlider from './LiveSlider';

export default function Sliders({ data, liveSliders, onChange }) {
  const SliderComponent = liveSliders ? LiveSlider : Slider;
  const sliders = data.map((d, i) => (<SliderComponent key={i} data={d} onChange={value => onChange(i, value)} />));
  return (
    <div>
      {sliders}
    </div>
  );
}
