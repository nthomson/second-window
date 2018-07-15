import React from 'react';
import './OrderQueue.css';

import Order from '../order/Order'

class OrderQueue extends React.Component {


  render() {
    const orders = this.props.orders.map((order)=>
      <Order items={order} />
    )

    return (
      <div className="OrderQueue">
        {orders}
      </div>
    );
  }
}

export default OrderQueue;
