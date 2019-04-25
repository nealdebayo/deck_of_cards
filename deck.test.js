let chai = require('chai'),
assert = chai.assert,
expect = chai.expect,
should = chai.should();
const  DeckOfCards = require('./deck')
let myDeckOfCards = new DeckOfCards

describe('each deal', () => {
	it('should return an array', () => {
		assert.typeOf(myDeckOfCards.dealCard(), 'array')
	})
	it('should return one card', () => {
		expect(myDeckOfCards.dealCard()).to.have.lengthOf(1)
	})
	it('should return two cards', () => {
		expect(myDeckOfCards.dealCard()).to.have.lengthOf(1)
	})
})

describe('each card', () => {
	it('should be an object', () => {
		assert.typeOf(myDeckOfCards.dealCard()[0], 'object')
	})
	it('Should have a face property', () => {
		myDeckOfCards.dealCard()[0].should.have.property("face")
	})
	it('Should have a suit property', () => {
		myDeckOfCards.dealCard()[0].should.have.property("suit")
	})
})

describe("shuffling the card", () => {
	it ('should be shuffled', () => {
		expect(myDeckOfCards.shuffle().deck).to.have.have.lengthOf(52)
	})
})

