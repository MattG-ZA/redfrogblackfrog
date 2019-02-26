export const buildCardDeck = () => {
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    const deck = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 14; j++) {
            deck.push({
                value: j,
                suit: suits[i],
                display: GetCardDisplay(j),
                showFace: true,
            });
        }
    }

    return deck;
};

const GetCardDisplay = (value) => {
    let displayValue = '';

    switch (value) {
        case 1:
            displayValue = 'A';
            break;
        case 11:
            displayValue = 'J';
            break;
        case 12:
            displayValue = 'Q';
            break;
        case 13:
            displayValue = 'K';
            break;
        default:
            displayValue = value;
    }

    return displayValue;
};

export const shuffleCardDeck = (deck) => {
    const shuffledDeck = [];

    for (let i = 52; i > 0; i--) {
        const randomCardIndex = Math.floor(Math.random() * i);
        const selectedCard = deck[randomCardIndex];

        shuffledDeck.push(selectedCard);
        deck.splice(randomCardIndex, 1);
    }

    return shuffledDeck;
};

export const dealOpeningCircle = (deck) => {
    let circleCards = [];
    circleCards.push({ value: 0, suit: "deckCard", display: 0, showFace: false, index: 0 });
    circleCards = circleCards.concat(deck.splice(deck.length - 12, deck.length));

    return circleCards;
}

export const dealPlayerHands = (deck) => {
    const playerHands = {
        first: [],
        second: [],
    };

    const deckSize = deck.length;

    for (let i = deckSize - 1; i > deckSize - 15; i--) {
        if (i % 2 === 0) {
            deck[i].showFace = false;
            playerHands.second.push(deck[i]);
        }
        else {
            playerHands.first.push(deck[i]);
        }

        deck.splice(i, 1);
    }

    return playerHands;
}