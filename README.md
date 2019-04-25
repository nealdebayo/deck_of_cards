# deck_of_cards
# Usage Instructions
git clone this repo
const  DeckOfCards = require('./deck')

# create a new instance of deck of cards
let myDeckOfCards = new DeckOfCards

# .shuffle() to shuffle cards
myDeckOfCards.shuffle()

# .dealCard() to deal one card
console.log(myDeckOfCards.dealCard()[0])