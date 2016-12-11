console.log('**mocha**', mocha);
console.log('**chai**', chai);
console.log('**describe**', describe);

const should = chai.should();
const expect = chai.should();

describe('ShoppingListItem', () => {
	let listItem = new ShoppingListItem();
	it('should be a class', () => {
		listItem.should.be.a.function;
	})

  it('should have a property of name', () => {
    let listItem = new ShoppingListItem();
    listItem.should.have.property('name');
    console.log(listItem.should.have.property('name'))
  })

});