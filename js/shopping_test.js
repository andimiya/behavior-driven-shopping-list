 /*jshint esversion: 6 */

console.log('**mocha**', mocha);
console.log('**chai**', chai);
console.log('**describe**', describe);

const should = chai.should();
const expect = chai.expect();

describe('ShoppingListItem', () => {
	let listItem = new ShoppingListItem();

	it('should be a class', () => {
		listItem.should.be.a.function;
	});

  it('should have a property of name', () => {
    listItem.should.have.property('name');
  });

  it('should have a property of description', () => {
    listItem.should.have.property('description');
  });

  it('should have a property of is_done', () => {
    listItem.should.have.property('is_done');
  });

  describe('check', () => {
    let listItem = new ShoppingListItem();
    listItem.check();

    it('check should be a method', () => {
      listItem.check.should.be.a.function;
    });

    it('is_done should be set to true', () => {
      listItem.is_done.should.equal(true);
    });
  });

  describe('uncheck', () => {
    let listItem = new ShoppingListItem();
    listItem.uncheck();

    it('uncheck should be a method', () => {
      listItem.check.should.be.a.function;
    });

    it('is_done should be set to false', () => {
      listItem.is_done.should.equal(false);
    });
  });

  describe('render', () => {
    let listItem = new ShoppingListItem('Avocado', 'Must be eaten immediately.', true);
    listItem.render();

    it('render should construct and return an html formatted string', () => {
      listItem.render.should.be.a.string;
    });
  });
});

describe('ShoppingList', () => {
  let list = new ShoppingList();

  it('ShoppingList should be a function', () => {
    list.should.be.a.function;
  });

  it('should have a property named items', () => {
    list.should.have.property('items');
  });

  it('items should be set to an empty array', () => {
    list.items.should.be.empty;
  });

  describe('addItem', () => {
    let list = new ShoppingList();
    list.addItem();

    it('addItem should be a function', () => {
      list.addItem.should.be.a.function;
    });

    it('addItem should have a property named ShoppingListItem', () => {
      list.should.have.property('ShoppingListItem');
    });

    it('ShoppingListItem should be added to items array', () => {
      list.should.include.keys('ShoppingListItem');
    });

    it('addItem should throw error if invalid ShoppingListItem', () => {
    list.addItem('Not a ShoppingListItem').should.throw(Error);
    });

  });

  describe('removeItem', () => {
    let list = new ShoppingList();
    list.removeItem('Avocado');

    it('removeItem should be a function', () => {
      list.removeItem.should.be.a.function;
    });

    it('removeItem should remove item from array', () => {
      list.removeItem.should.not.include.keys('ShoppingListItem');
    });

    it('removeItem should remove last item in array if any', () => {
      list.removeItem.should.be.empty;
    });

  });

});
