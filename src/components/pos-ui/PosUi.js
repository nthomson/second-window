import React from 'react';
// import './PosUi.css';

import Menu from '../menu/Menu';
import Order from '../order/Order';

class PosUi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {ticketItems: {}, itemNum: 0};
  }

  addItemToTicket(item) {
    this.setState(function(prevState){
      const ticketItems = prevState.ticketItems;

      if(ticketItems[item.id]) {
        ticketItems[item.id].count += 1;
      }
      else {
        ticketItems[item.id] = {
          item: item,
          count: 1,
          itemNum: prevState.itemNum
        }
      }

      return {
        ticketItems: ticketItems,
        itemNum: prevState.itemNum + 1
      };
    });
  }

  removeItemFromTicket(item) {
    this.setState(function(prevState){
      const ticketItems = prevState.ticketItems;

      if(ticketItems[item.id]) {
        ticketItems[item.id].count -= 1;

        if(ticketItems[item.id].count < 1) {
          delete ticketItems[item.id];
        }
      }

      return {
        ticketItems: ticketItems
      };
    });
  }

  cancelTicket() {
    this.setState({ticketItems: {}, itemNum: 0});
  }

  sendTicket() {
    this.props.onSendTicket(this.state.ticketItems)
    this.cancelTicket();
  }

  render() {
    return (
      <div className="PosUi">
          <div className="ticket">
            <Order
              items={this.state.ticketItems}
              showPrice={true}
              onRemoveItem={this.removeItemFromTicket.bind(this)}
            />
            <div className="commands">
              <button onClick={this.cancelTicket.bind(this)} className="cancel">Cancel</button>
              <button onClick={this.sendTicket.bind(this)} className="send">Send</button>
            </div>
          </div>
          <div className="pos-menu">
            <Menu onSelectItem={this.addItemToTicket.bind(this)} />
          </div>
        </div>
    );
  }
}

export default PosUi;
