import React from 'react';
import './Order.css';
import MenuItem from '../menu-item/MenuItem';

class Order extends React.Component {
  render() {
  	const orderItems = Object.values(this.props.items).map((orderItem)=>
      <div key={orderItem.item.id}>
        <MenuItem item={orderItem.item} />
        <p>Count: {orderItem.count}</p>
      </div>
    )

    return (
      <div className="Order">
      	{orderItems}
      </div>
    );
  }
}

export default Order;
