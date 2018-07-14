const menu = [
    {name: 'Cheeseburger', price: 399, id: 1},
    {name: 'Pizza', price: 599, id: 2},
    {name: 'Salad', price: 399, id: 3},
    {name: 'BBQ Sandwich', price: 499, id: 4},
    {name: 'Chicken Sandwich', price: 399, id: 5},
    {name: 'Hot Dog', price: 599, id: 6},
    {name: 'Fries', price: 399, id: 7},
    {name: 'Onion Rings', price: 499, id: 8},
    {name: 'Mozzarella Sticks', price: 499, id: 9},
    {name: 'Chicken Nuggets', price: 499, id: 10},
    {name: 'Chicken Tenders', price: 499, id: 11},
    {name: 'Milk Shake', price: 499, id: 12},
    {name: 'Fountain Drink', price: 499, id: 13},
    {name: 'Pretzel Bites', price: 499, id: 14},
    {name: 'Corn Dog', price: 499, id: 15}
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
