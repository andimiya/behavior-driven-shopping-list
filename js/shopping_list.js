 /*jshint esversion: 6 */

class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(ShoppingListItem){
    this.ShoppingListItem = ShoppingListItem;
    this.items.push(ShoppingListItem);
    console.log(this.items, 'additem');
  }

  removeItem(ShoppingListItem){

    if(this.items.indexOf(ShoppingListItem) > -1) {
      this.items.splice(this.items.indexOf(ShoppingListItem), 1);
    }if(this.done === true){
      listItem.check();
    }else{
      listItem.uncheck();
    }
    console.log(this.items, 'removeItem');
  }
}