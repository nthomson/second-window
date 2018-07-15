const menu = [
  {name: 'Cheeseburger', price: 249, id: 1},
  {name: 'Pizza Slice', price: 299, id: 2},
  {name: 'Side Salad', price: 399, id: 3},
  {name: 'BBQ Sandwich', price: 399, id: 4},
  {name: 'Chicken Sandwich', price: 349, id: 5},
  {name: 'Hot Dog', price: 149, id: 6},
  {name: 'Side of Fries', price: 99, id: 7},
  {name: 'Onion Rings', price: 149, id: 8},
  {name: 'Mozzarella Sticks', price: 199, id: 9},
  {name: 'Chicken Nuggets', price: 199, id: 10},
  {name: 'Chicken Tenders', price: 299, id: 11},
  {name: 'Milk Shake', price: 299, id: 12},
  {name: 'Fountain Drink', price: 149, id: 13},
  {name: 'Pretzel Bites', price: 199, id: 14},
  {name: 'Corn Dog', price: 149, id: 15}
];

const menuItemById = {};
menu.forEach((item) => {
  menuItemById[item.id] = item;
});

class MenuService {
  // Get the full menu as an array of menu items
  static getMenu() {
      return menu;
  }

  // Get a menu item using its ID
  static getMenuItem(id) {
      return menuItemById[id];
  }
}

export default MenuService;
