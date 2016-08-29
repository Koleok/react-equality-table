import React, { Component } from 'react';
import Matrix from 'react-matrix';

import { strictEq, looseEq, eqMatrix } from './utils';
import logo from './logo.svg';
import vals from './values';
import './App.css';

const container = (paddingTop = 0, flexDirection = 'column') => ({
  flex: 1,
  paddingTop,
  flexDirection,
  justifyContent: 'center',
  alignItems: 'center',
});

class App extends Component {
  constructor(props) {
    super(props);
    this._toggleOperator = this._toggleOperator.bind(this);
    this._makeMatrix = this._makeMatrix.bind(this);
    this.state = { operator: looseEq };
  }

  _toggleOperator() {
    const operator = this.state.operator === looseEq ? strictEq : looseEq;
    this.setState({ operator });
  }

  _makeMatrix() {
    return eqMatrix(this.state.operator, vals);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={() => this._toggleOperator()} />
          <h2>Welcome to React</h2>
        </div>
        <div style={container(20)}>
          <Matrix squareSize={30} matrix={this._makeMatrix()} />
        </div>
      </div>
    );
  }
}

export default App;
