import React from 'react';
import './OrderQueue.css';

import Order from '../order/Order'

class OrderQueue extends React.Component {


  render() {
    const orders = this.props.orders.map(order => (
      <div className="queue-item" key={order.id}>
        <div className="order-num">Order #{order.id}</div>
        <Order items={order.items} />
        {this.props.onRemoveItem ? (
          <button className="complete"
            onClick={this.props.onRemoveItem.bind(this, order)}>
            Complete
          </button>
        ) : null}
      </div>
    ))

    return (
      <div className="OrderQueue">
        {orders}
      </div>
    );
  }
}

export default OrderQueue;
