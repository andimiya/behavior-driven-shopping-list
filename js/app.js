var listItem = new ShoppingListItem('Avocado', 'is Squishy', true);

var renderListItem = listItem.render()
document.getElementById('content').innerHTML = renderListItem;

console.log('test', listItem);