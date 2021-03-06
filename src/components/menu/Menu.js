import React from 'react';
import './Menu.css';
import MenuItem from '../menu-item/MenuItem';
import MenuService from '../../services/menu'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: MenuService.getMenu()
    }
  }

  addItemToTicket(id, e) {
    const item = MenuService.getMenuItem(id);
    this.props.onSelectItem(item);
  }

  render() {
    const menuItems = this.state.items.map((item)=>
      <div key={item.id} onClick={this.addItemToTicket.bind(this, item.id)}>
        <MenuItem item={item} showPrice={true} />
      </div>
    )
    return (
      <div className="Menu">
        {menuItems}
      </div>
    );
  }
}

export default Menu;
