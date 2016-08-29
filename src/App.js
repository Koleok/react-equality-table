import React, { Component } from 'react';
import Matrix from 'react-matrix';

import { strict, loose, eqMatrix, states } from './utils';
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
    this._matrix = this._matrix.bind(this);
    this.state = { operator: loose, name: '==' };
  }

  _toggleOperator() {
    const [operator, name] = this.state.operator === loose
      ? [strict, '===']
      : [loose, '=='];

    this.setState({ operator, name });
  }

  _matrix() {
    return eqMatrix(this.state.operator, vals);
  }

  render() {
    return (
      <div className="App">
        <div
          className="App-header"
          onClick={() => this._toggleOperator()}
          style={{ cursor: 'pointer' }}
        >
          <h1 alt="logo" src={logo} className="App-logo" >Click To change operator</h1>
          <h2>x {this.state.name} y</h2>
        </div>
        <div style={container(50)}>
          <Matrix
            squareSize={30}
            cellStates={states}
            matrix={this._matrix()}
          />
        </div>
      </div>
    );
  }
}

export default App;
