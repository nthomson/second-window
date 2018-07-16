import React, { Component } from 'react';
import './App.css';

import PosUi from './components/pos-ui/PosUi';

import OrderQueue from './components/order-queue/OrderQueue';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {orders: [], tab: 'pos'};
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

  setTab(tabName) {
    this.setState({tab: tabName});
  }

  render() {
    return (
      <div className="App">
        <div className="tabNav">
          <button
            className={this.state.tab === 'pos' ? 'active' : ''}
            onClick={this.setTab.bind(this, 'pos')}
          >
            Menu
          </button>
          <button
            className={this.state.tab === 'queue' ? 'active' : ''}
            onClick={this.setTab.bind(this, 'queue')}
          >
            Order Queue
            ({this.state.orders.length})
          </button>
        </div>
        <div className={this.state.tab !== 'pos' ? 'hidden' : ''}>
          <PosUi
            onSendTicket={this.sendTicket.bind(this)}

          />
        </div>
        <div className={this.state.tab !== 'queue' ? 'hidden' : ''}>
          <OrderQueue
            orders={this.state.orders}
            onRemoveItem={this.clearItemFromQueue.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
