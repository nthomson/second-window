import React from 'react';
import './MenuItem.css';

class MenuItem extends React.Component {
  render() {
    return (
      <div className="MenuItem">
        <div className="name">{this.props.item.name}</div>
        <div className="price">(${this.props.item.price / 100})</div>
      </div>
    );
  }
}

export default MenuItem;
