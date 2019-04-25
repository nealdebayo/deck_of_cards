const  DeckOfCards = require('./deck')

let myDeckOfCards = new DeckOfCards
myDeckOfCards.shuffle()

console.log(myDeckOfCards.dealCard(55))

