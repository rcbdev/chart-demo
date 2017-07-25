import React, { Component } from 'react';
import { Sliders, Checkbox } from './components';
import { Chart } from './containers';

const getInitialState = () => {
    let dataInitialise = [];
    dataInitialise.length = 10;
    dataInitialise.fill(0);

    return {
      data: dataInitialise.map(i => ({ start: Math.ceil(Math.random() * 100), length: Math.ceil(Math.random() * 10) })),
      liveSliders: false
    };
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = getInitialState();
  }

  onSliderChange = (index, value) => {
    const data = this.state.data.map((item, i) => i === index ? value : item);
    this.setState({data: data});
  }

  render() {
    return (
      <div>
        <Chart data={this.state.data}/>
        <Checkbox label="Live Sliders" checked={this.state.liveSliders} onChange={checked => this.setState({ liveSliders: checked })} />
        <Sliders data={this.state.data} liveSliders={this.state.liveSliders} onChange={this.onSliderChange}/>
      </div>
    );
  }
}
