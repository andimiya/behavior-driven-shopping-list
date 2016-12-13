var listItem = new ShoppingListItem('Avocado', 'is Squishy', true);

//invoke shopping_list object's render() method
//store the output to a variable
//write the output html into the div id=content

var renderListItem = listItem.render()
document.getElementById('content').innerHTML = renderListItem;

console.log('test', listItem);