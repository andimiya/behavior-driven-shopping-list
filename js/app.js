var listItem = new ShoppingListItem('Avocado', 'is Squishy', true);

var renderListItem = listItem.render()
document.getElementById('content').innerHTML = renderListItem;

console.log('test', listItem);

class add_to_shopping_list extends ShoppingListItem {
  constructor (title, desciption) {
    super(title, desciption);
  }
}

  // var new_shopping_list_item =

