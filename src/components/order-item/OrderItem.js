import React from 'react';
import './OrderItem.css';
import MenuItem from '../menu-item/MenuItem';

class OrderItem extends React.Component {

  getTotalCost() {
    return (this.props.menuItem.price * this.props.count)/100;
  }

  render() {
    return (
      <div className="OrderItem">
        <MenuItem item={this.props.menuItem} />
        <div class="total-cost">
          x{this.props.count} - ${this.getTotalCost()}
        </div>
      </div>
    );
  }
}

export default OrderItem;
