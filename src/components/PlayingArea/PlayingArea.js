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
                <PlayerCardWrapper playerHand={playerHands.second} player={"player-two"} />
                <CentreCardWrapper circleCards={circleCards} />
                <PlayerCardWrapper playerHand={playerHands.first} player={"player-one"} />
            </span>
        );
    }
}

export default PlayingArea;