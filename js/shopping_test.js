console.log('**mocha**', mocha);
console.log('**chai**', chai);
console.log('**describe**', describe);

const should = chai.should();
const expect = chai.expect();

describe('ShoppingListItem', () => {
	let listItem = new ShoppingListItem();

	it('should be a class', () => {
		listItem.should.be.a.function;
	})

  it('should have a property of name', () => {
    listItem.should.have.property('name');
  })

  it('should have a property of description', () => {
    listItem.should.have.property('description');
  })

  it('should have a property of is_done', () => {
    listItem.should.have.property('is_done');
  })
});

describe('check', () => {
  let listItem = new ShoppingListItem();
  listItem.check();

  it('check should be a method', () => {
    listItem.check.should.be.a.function;
  })

  it('is_done should be set to true', () => {
    listItem.is_done.should.equal(true);
  })
});

describe('uncheck', () => {
  let listItem = new ShoppingListItem();
  listItem.uncheck();

  it('uncheck should be a method', () => {
    listItem.check.should.be.a.function;
  })

  it('is_done should be set to false', () => {
    listItem.is_done.should.equal(false);
  })

  console.log(listItem.is_done, 'listItem is done')

});

describe('render', () => {
  let listItem = new ShoppingListItem('Avocado', 'Must be eaten immediately.', true);
  listItem.render();

  it('render should construct and return an html formatted string', () => {
    listItem.render.should.be.a.string;
    console.log(listItem.render, 'listItem render')
  })

})
