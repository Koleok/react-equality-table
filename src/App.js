import React, { Component } from 'react';
import Matrix from 'react-matrix';

import { strictEq, looseEq, eqMatrix } from './utils';
import logo from './logo.svg';
import vals from './values';
import './App.css';

const container = (flexDirection = 'column') => ({
  flex: 1,
  flexDirection,
  justifyContent: 'center',
  alignItems: 'center',
});

class App extends Component {
  constructor(props) {
    super(props);
    this._changeOperator = this._changeOperator.bind(this);
    this._makeMatrix = this._makeMatrix.bind(this);
    this.state = { operator: looseEq };
  }

  _changeOperator(operator) {
    this.setState({ operator });
  }

  _makeMatrix() {
    return eqMatrix(this.state.operator, vals);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div style={container()}>
          <Matrix squareSize={20} matrix={this._makeMatrix()} />
        </div>
      </div>
    );
  }
}

export default App;
