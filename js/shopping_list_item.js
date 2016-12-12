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

  render() {
    var renderToString = `<ul>\n<li class='completed_${this.is_done}'>\n<span>${this.name}</span>\n<span>${this.description}</span>\n</li>\n</ul>`
    console.log(renderToString, 'renderToString');
    return renderToString;
  }

}

class ShoppingList {
  constructor(items) {
    this.items = items;
  }
}
