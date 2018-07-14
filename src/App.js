import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/menu/Menu';
import Order from './components/order/Order';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu-pos">
          <Menu />
        </div>
        <div className="ticket">
          <Order />
        </div>
      </div>
    );
  }
}

export default App;
