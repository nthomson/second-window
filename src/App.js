import React, { Component } from 'react';
import './App.css';

import PosUi from './components/pos-ui/PosUi';

import OrderQueue from './components/order-queue/OrderQueue';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {orders: []};
  }

  sendTicket(ticketItems) {
    this.setState(prevState => ({
      orders: [...prevState.orders, ticketItems]
    }));
  }

  clearItemFromQueue(order) {
    this.setState(function(prevState){
      let orders = [...prevState.orders];

      var orderIndex = orders.indexOf(order);
      if(orderIndex > -1) {
        orders.splice(orderIndex, 1);
      }

      return {
        orders: orders,
      }
    });
  }

  render() {
    return (
      <div className="App">
        <PosUi onSendTicket={this.sendTicket.bind(this)} />
        <OrderQueue orders={this.state.orders} onRemoveItem={this.clearItemFromQueue.bind(this)} />
      </div>
    );
  }
}

export default App;
