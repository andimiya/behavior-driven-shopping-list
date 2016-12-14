var listItem = new ShoppingListItem('Avocado', 'is Squishy', true);

var renderListItem = listItem.render();
document.getElementById('content').innerHTML = renderListItem;

console.log('test', listItem);

var addList = new ShoppingList();

class add_to_shopping_list extends ShoppingListItem {
  constructor (title, description) {
    super(title, description);
    var new_shopping_list_item = [this.title, this.description];
    addList.addItem(new_shopping_list_item);
     }
}