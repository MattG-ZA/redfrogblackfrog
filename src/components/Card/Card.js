import React from 'react';
import './Card.css';

const RotateCard = (card, totalCards) => {
    let transformCard = 'none';

    if (totalCards.type === 'centreCards') {
        const degrees = 360 / (totalCards.total - 1);
        // Ensure the deck card stays in the centre
        const translate = card.suit === 'deckCard' ? 0 : 15;

        transformCard = `rotate(${card.index * degrees}deg) translate(${translate}em) rotate(${360 - (card.index * degrees)}deg)`;
    }
    else if (totalCards.type === 'playerCards') {
        const totalCardsSplit = Math.floor(totalCards.total / 2);
        const degrees = 35 / totalCardsSplit;

        // Change the rotation of cards slightly for an even hand
        if ((totalCards.total) / 2 % 1 === 0 && card.index >= totalCardsSplit) {
            card.index += 1;
        }

        transformCard = `rotate(${(card.index * degrees) - 35}deg)`;
    }

    return transformCard;
}

const BuildCardClass = (card) => {
    let cardClass = card.showFace ? `card suit${card.suit}` : 'card back';

    if (card.suit === 'deckCard') {
        cardClass += ' centre';
    }

    return cardClass;
}

const BuildCardStyle = (card, totalCards) => {
    let cardStyle = {};

    cardStyle.transform = RotateCard(card, totalCards);

    if (card.highlight) {
        cardStyle.zoom = 1.1;
        cardStyle.zIndex = 1000;
        cardStyle.boxShadow = '4px 4px 8px rgba(0,0,0,0.3)';
    }

    return cardStyle;
}

const Card = ({ card, totalCards, selectCard, highlightCard }) => {
    card.type = totalCards.type;

    return (
        <span onClick={() => {selectCard(card); highlightCard(card)}} style={BuildCardStyle(card, totalCards)} className={BuildCardClass(card)}>
            <span>
                {card.showFace && <p>{card.display}</p>}
            </span>
        </span>
    );
};

export default Card;