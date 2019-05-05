import React from 'react';
import './PlayingArea.css';
import PlayerCardWrapper from '../PlayerCardWrapper/PlayerCardWrapper';
import CentreCardWrapper from '../CentreCardWrapper/CentreCardWrapper';

class PlayingArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shuffledDeck: props.shuffledDeck,
            circleCards: props.circleCards,
            playerHands: props.playerHands,
        };

        this.selectCards = {
            playerCard: {},
            circleCard: {},
        };
    }

    selectCard = (card) => {
        if (card.type === 'playerCards') {
            this.selectCards.playerCard = card;
        }
        else if (card.type === 'circleCards') {
            this.selectCards.circleCard = card;
        }

        // Temp code
        if (this.selectCards.playerCard && this.selectCards.circleCard) {
            if (this.selectCards.playerCard.value + this.selectCards.circleCard.value === 10) {
                const circleCards = this.state.circleCards;
                const playerHands = this.state.playerHands;
                
                circleCards.splice(this.selectCards.circleCard.index, 1);
                playerHands.first.splice(this.selectCards.playerCard.index, 1);

                console.log('--------');
                console.log('this.selectCards.playerCard', this.selectCards.playerCard);
                console.log('this.selectCards.playerCard.index', this.selectCards.playerCard.index);
                console.log('--------');

                this.setState({ circleCards, playerHands });

                this.selectCards = {
                    playerCard: {},
                    circleCard: {},
                };
            }
        }

        // console.log(this.selectCards);
    }

    render() {
        // console.log('deck ', this.state.shuffledDeck);
        // console.log('circle ', this.state.circleCards);
        // console.log('hands ', this.state.playerHands);

        return (
            <span className="playing-area">
                <PlayerCardWrapper playerHand={this.state.playerHands.second} player={"player-two"} selectCard={this.selectCard} />
                <CentreCardWrapper circleCards={this.state.circleCards} selectCard={this.selectCard} />
                <PlayerCardWrapper playerHand={this.state.playerHands.first} player={"player-one"} selectCard={this.selectCard} />
            </span>
        );
    }
}

export default PlayingArea;