class ShoppingListItem {
  constructor (name, description, is_done) {
    this.name = name;
    this.description = description;
    this.is_done = is_done;
  }

  check() {
    this.is_done = true;
    return this.is_done;
  }

  uncheck() {
    this.is_done = false;
    return this.is_done;
  }


//Modify the ShoppingListItem render() method to include a checkbox input
  render(checkbox) {

//Add an onchange event listener to this checkbox that will call function name changeCheckedStatus(idx, checkbox)

//idx = position (array index) of the shoppingListItem
//checkbox = actual checkbox element
    var renderToString = `<br />
    <span id="this_item${Math.random()}" class='completed_${this.is_done}'>\n
    <span><input type="checkbox" id="check-box" onclick="changeCheckedStatus()"/></span>\n
    <span>${this.name}</span>\n
    <span>${this.description}</span>\n
    </span>

    <span><button id="removeItem" onclick="removeItemButtonClicked()">X</button></span>
    `;
    return renderToString;
  }
}