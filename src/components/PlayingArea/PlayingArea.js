import React from 'react';
import './PlayingArea.css';
import { BuildCardDeck, ShuffleCardDeck, DealOpeningCircle, DealPlayerHands } from '../../logic/GameInit';
import PlayerCardWrapper from '../PlayerCardWrapper/PlayerCardWrapper';
import CentreCardWrapper from '../CentreCardWrapper/CentreCardWrapper';

class PlayingArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    selectCard = (card) => {
        if (card.type === 'playerCards') {
            console.log('Clicked PLAYER card ', card);
        }
        else if (card.type === 'centreCards') {
            console.log('Clicked CENTRE card ', card);
        }
    }

    render() {
        const deck = BuildCardDeck();
        const shuffledDeck = ShuffleCardDeck(deck);
        const circleCards = DealOpeningCircle(shuffledDeck);
        const playerHands = DealPlayerHands(shuffledDeck);

        console.log('deck ', shuffledDeck);
        console.log('circle ', circleCards);
        console.log('hands ', playerHands);

        return (
            <span className="playing-area">
                <PlayerCardWrapper playerHand={playerHands.second} player={"player-two"} selectCard={this.selectCard} />
                <CentreCardWrapper circleCards={circleCards} selectCard={this.selectCard} />
                <PlayerCardWrapper playerHand={playerHands.first} player={"player-one"} selectCard={this.selectCard} />
            </span>
        );
    }
}

export default PlayingArea;