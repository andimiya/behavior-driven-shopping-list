console.log('**mocha**', mocha);
console.log('**chai**', chai);
console.log('**describe**', describe);

const should = chai.should();
const expect = chai.should();

describe('ShoppingListItem', () => {
	let listItem = new ShoppingListItem();
	it('should be a class', () => {
		ShoppingListItem.should.be.a.function;
	})
});