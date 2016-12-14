
//Create an add_to_shopping_list function that will read the value of the ShoppingListItem name and description fields

// Invoke ShoppingList addItem() by passing in new_shopping_list_item
// addShoppingListItem.addItem(new_shopping_list_item);
let addItemVar = new ShoppingList();

function add_to_shopping_list(name, description){
  var name = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(name, description);
  // var addItemVar = new ShoppingList(new_shopping_list_item);
  addItemVar.addItem(new_shopping_list_item);
  console.log(new_shopping_list_item);
  var renderListItem = new_shopping_list_item.render();
  document.getElementById('content').innerHTML += renderListItem;
}




//Find a ShoppingListItem based on the idx passed in to the function
//Is the checkbox checked? or not checked?
//If checked, invoke shopping_list_item object's check() method
//If not checked, invoke the shopping_list_item uncheck()method

let changeCheck = new ShoppingListItem();

function changeCheckedStatus(idx, checkbox){
  if (document.getElementById('check-box').checked === true)
  {
    console.log('yes');
    changeCheck.check();

  }
  else {
    console.log('no');
    changeCheck.uncheck();
  }
}

//Find a ShoppingListItem based on idx passed into the function
//If idx is in the array of items then invoked removeItem method

function removeItemButtonClicked(idx){
  if(ShoppingList.ShoppingListItem.indexOf(idx) > -1){
    addItemVar.removeItem(idx);
  }
}




