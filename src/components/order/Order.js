import React from 'react';
import './Order.css';
import OrderItem from '../order-item/OrderItem';

class Order extends React.Component {

  render() {
    const sortedItems = Object.values(this.props.items)
      .sort((a, b) => a.itemNum - b.itemNum)

    const orderItems = sortedItems.map(orderItem => (
        <div>
          {this.props.onRemoveItem ? (
            <button
              onClick={this.props.onRemoveItem.bind(this, orderItem.item)}>
              x
            </button>
          ) : null}
          <OrderItem
            key={orderItem.item.id}
            showPrice={this.props.showPrice}
            menuItem={orderItem.item}
            count={orderItem.count}
          />
        </div>
      ))

    const totalCost = sortedItems.reduce((acc, curr) => acc + (curr.count * curr.item.price), 0) / 100;
    const price = this.props.showPrice ? (<div className="total">Total: ${totalCost}</div>) : null;

    return (
      <div className="Order">
        {orderItems}
        {price}
      </div>
    );
  }
}

export default Order;
