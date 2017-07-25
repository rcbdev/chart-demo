import React, { Component } from 'react';
import { StyledSlider } from '../styled';

export default class Slider extends Component {
  componentDidMount = () => {
    const { data, onChange } = this.props;
    this.sliderInput.addEventListener('change', e => onChange({ start: e.target.value * 1, length: data.length }));
  }

  render() {
    const { data } = this.props;

    return (
      <StyledSlider
        defaultValue={data.start}
        innerRef={input => { this.sliderInput = input; }} />
    );
  }
}
