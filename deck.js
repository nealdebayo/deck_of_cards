class Card {
	constructor(cardFace, cardSuit) {
		this.face = cardFace
		this.suit = cardSuit
	}
}

class DeckofCards {
    constructor() {
  
		this.deck = []
		this.dealtCards = []
		this.currentCard = 0
		this.numberOfCards = 52
  
    	const suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    	const faces = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
		

		for (let i = 0; i < this.numberOfCards; i++) {
			this.deck[ i ] = new Card(faces[ i % 13 ], suit[ Math.floor(i / 13) ])
		}
    }
  

	shuffle(){
	  let { deck, currentCard } = this;
	  let deckSize = deck.length; currentCard = 0

	  for (let firstCard=0; firstCard < deckSize; firstCard++){
		  let randomCard = Math.floor(Math.random() * (deckSize)) 

		  let temp = deck[firstCard]
		  deck[ firstCard ] = deck[ randomCard ]
		  deck[ randomCard ] = temp

	  }
	  return this
	}
  
    dealCard(noOfCardsToDeal) {
		if (!noOfCardsToDeal)
			noOfCardsToDeal = 1
		this.dealtCards = []
		if (this.currentCard < this.deck.length) {
			for (let i = 0 ; i < noOfCardsToDeal; i++) {
				let theCard = this.deck[this.currentCard]
				if (theCard) {
					this.dealtCards.push(theCard)
				}
				this.currentCard++
			}
			return this.dealtCards
		}	else {
				return "No more Cards to deal"
			}
		}
	
  }
  
module.exports =  DeckofCards