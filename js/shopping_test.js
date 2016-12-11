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
    console.log(listItem.should.have.property('name'))
  })

  it('should have a property of description', () => {
    listItem.should.have.property('description');
    console.log(listItem.should.have.property('description'))
  })

  it('should have a property of is_done', () => {
    listItem.should.have.property('is_done');
    console.log(listItem.should.have.property('is_done'))
  })

  it('check should be a method', () => {
    listItem.check.should.be.a.function;
  })

  it('is_done should be set to true', () => {
    listItem.check.should.equal(true);
  })
  console.log(listItem.check)

});
