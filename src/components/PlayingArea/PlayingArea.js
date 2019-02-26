import React from 'react';
import './PlayingArea.css';
import * as GameInit from '../../logic/GameInit';
import PlayerCardWrapper from '../PlayerCardWrapper/PlayerCardWrapper';
import CentreCardWrapper from '../CentreCardWrapper/CentreCardWrapper';

class PlayingArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const deck = GameInit.buildCardDeck();
        const shuffledDeck = GameInit.shuffleCardDeck(deck);
        const circleCards = GameInit.dealOpeningCircle(shuffledDeck);
        const playerHands = GameInit.dealPlayerHands(shuffledDeck);

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