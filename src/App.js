import React, { Component } from 'react';
import './App.css';

import Menu from './components/menu/Menu';
import Order from './components/order/Order';
import OrderQueue from './components/order-queue/OrderQueue';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ticketItems: {},  orders: [], itemNum: 0};
  }

  addItemToTicket(item) {
    this.setState(function(prevState){
      const ticketItems = prevState.ticketItems;

      if(ticketItems[item.id]) {
        ticketItems[item.id].count += 1;
      }
      else {
        ticketItems[item.id] = {
          item: item,
          count: 1,
          itemNum: prevState.itemNum
        }
      }

      return {
        ticketItems: ticketItems,
        itemNum: prevState.itemNum + 1
      };
    });
  }

  sendTicket() {
    this.setState(function(prevState){
      return {
        orders: [...prevState.orders, prevState.ticketItems],
        ticketItems: {},
        itemNum: 0
      }
    });
  }

  cancelTicket() {
    this.setState({ticketItems: {}, itemNum: 0});
  }

  render() {
    return (
      <div className="App">
        <div className="ticket-build">
          <div className="menu-pos">
            <Menu onSelectItem={this.addItemToTicket.bind(this)} />
          </div>
          <div className="ticket">
            <Order items={this.state.ticketItems} showPrice={true} />
            <div className="commands">
              <button onClick={this.cancelTicket.bind(this)} className="cancel">Cancel</button>
              <button onClick={this.sendTicket.bind(this)} className="send">Send</button>
            </div>
          </div>
        </div>

        <h4>Order Queue</h4>
        <div className="order-queue">
          <OrderQueue orders={this.state.orders} />
        </div>
      </div>
    );
  }
}

export default App;
