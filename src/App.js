import React, { Component } from 'react';
import './App.css';

import Menu from './components/menu/Menu';
import Order from './components/order/Order';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ticketItems: {}};
  }

  addItemToTicket(item) {
    console.log(item);
    this.setState(function(prevState){
      const ticketItems = prevState.ticketItems;

      if(ticketItems[item.id]) {
        ticketItems[item.id].count += 1;
      }
      else {
        ticketItems[item.id] = {
          item: item,
          count: 1
        }
      }

      return {
        ticketItems: ticketItems
      };
    });
  }

  render() {
    return (
      <div className="App">
        <div className="menu-pos">
          <Menu onSelectItem={this.addItemToTicket.bind(this)} />
        </div>
        <div className="ticket">
          <Order items={this.state.ticketItems} />
        </div>
      </div>
    );
  }
}

export default App;
