import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NumberGenerator extends Component {
  constructor(props) {
      super(props)
      this.state = {array: [1, 2]}
  }

  pushToArray() {
      let current_array = this.state.array
      current_array.push(Math.floor(Math.random()*10) + 1)
      this.setState({array: current_array})
  }

  removeFromArray() {
      let current_array = this.state.array
      current_array.shift()
      this.setState({array: current_array})
  }

    componentDidMount() {
        setInterval(this.pushToArray.bind(this), 1000)
        setInterval(this.removeFromArray.bind(this), 2000)
    }

  render() {
    return (
      <div className="App">
          <ul>{this.state.array.map((ele, id) => {
            return <li id={id}>{ele}</li>
        })}</ul>
      </div>
    );
  }
}

export default NumberGenerator;
