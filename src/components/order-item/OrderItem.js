import React from 'react';
import './OrderItem.css';
import MenuItem from '../menu-item/MenuItem';

class OrderItem extends React.Component {

  getTotalCost() {
    return (this.props.menuItem.price * this.props.count)/100;
  }

  render() {
    const totalPrice = this.props.showPrice ? (<span>- ${this.getTotalCost()}</span>) : null;
    return (
      <div className="OrderItem">
        <MenuItem item={this.props.menuItem} />
        <div className="count">
          <div>x{this.props.count} {totalPrice}</div>
        </div>
      </div>
    );
  }
}

export default OrderItem;
