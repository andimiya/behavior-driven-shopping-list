
//Create an add_to_shopping_list function that will read the value of the ShoppingListItem name and description fields

// Invoke ShoppingList addItem() by passing in new_shopping_list_item
// addShoppingListItem.addItem(new_shopping_list_item);
let myShoppingList = new ShoppingList();

console.log(myShoppingList.items, 'myShoppingList')


function add_to_shopping_list(name, description, is_done){
  var name = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(name, description);

  myShoppingList.addItem(new_shopping_list_item);
  console.log(new_shopping_list_item);
  var renderListItem = new_shopping_list_item.render();
  document.getElementById('content').innerHTML += renderListItem;
  console.log(myShoppingList.items, 'myShoppingList')

}


//Find a ShoppingListItem based on the idx passed in to the function
//Is the checkbox checked? or not checked?
//If checked, invoke shopping_list_item object's check() method
//If not checked, invoke the shopping_list_item uncheck()method

let changeCheck = new ShoppingListItem();

function changeCheckedStatus(){
  if (document.getElementById('check-box').checked === true)
  {
    console.log('true');
    changeCheck.check();

  }
  else {
    console.log('false');
    changeCheck.uncheck();
  }
}

function removeItemButtonClicked(){



  if (myShoppingList.items.indexOf('fds') > -1) {

      console.log('sanity check')
    }
  else {
    console.log('false');
  }

  // document.getElementById('this_item')

   // if(ShoppingList.ShoppingListItem.indexOf(idx) > -1){
   //   addItemVar.removeItem(idx);
   // }
 }