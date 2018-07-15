import React from 'react';
import './MenuItem.css';

class MenuItem extends React.Component {
  render() {
  	const price = this.props.showPrice ? (<div className="price">${this.props.item.price / 100}</div>) : null;
    return (
      <div className="MenuItem">
        <div className="name">{this.props.item.name}</div>
        {price}
      </div>
    );
  }
}

export default MenuItem;
