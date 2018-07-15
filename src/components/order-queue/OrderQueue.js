import React from 'react';
import './OrderQueue.css';

import Order from '../order/Order'

class OrderQueue extends React.Component {


  render() {
    const orders = this.props.orders.map(order => (
      <div>
        {this.props.onRemoveItem ? (
          <button onClick={this.props.onRemoveItem.bind(this, order)}>
            x
          </button>
        ) : null}
        <Order items={order} />
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
