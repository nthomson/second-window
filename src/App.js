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

  removeItemFromTicket(item) {
    this.setState(function(prevState){
      const ticketItems = prevState.ticketItems;

      if(ticketItems[item.id]) {
        ticketItems[item.id].count -= 1;

        if(ticketItems[item.id].count < 1) {
          delete ticketItems[item.id];
        }
      }

      return {
        ticketItems: ticketItems
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

  clearItemFromQueue(order) {
    console.log('clear item from queue', order);
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
        <div className="ticket-build">

          <div className="ticket">
            <Order
              items={this.state.ticketItems}
              showPrice={true}
              onRemoveItem={this.removeItemFromTicket.bind(this)}
            />
            <div className="commands">
              <button onClick={this.cancelTicket.bind(this)} className="cancel">Cancel</button>
              <button onClick={this.sendTicket.bind(this)} className="send">Send</button>
            </div>
          </div>
          <div className="pos-menu">
            <Menu onSelectItem={this.addItemToTicket.bind(this)} />
          </div>
        </div>

        <div className="order-queue">
          <OrderQueue orders={this.state.orders} onRemoveItem={this.clearItemFromQueue.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
