import React from 'react';
import './PlayerCardWrapper.scss';
import Card from '../Card/Card';

class PlayerCardWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { highlightCard: {} };
    }

    highlightCard = (card) => {
        // Only highlight if clicking one of your own cards
        if (card.showFace) {
            const { playerHand } = this.props;

            playerHand.forEach(card => {
                card.highlight = false;
            });

            card.highlight = true;
            this.setState({highlightCard: card});
        }
    }

    render() {
        const { playerHand, player, selectCard } = this.props;

        return (
            <div className={'player-card-wrapper ' + player}>
                {playerHand.map((card, index) => {
                    card.index = index;
                    return <Card
                        key={index}
                        card={card}
                        totalCards={{ total: playerHand.length, type: 'playerCards' }}
                        selectCard={selectCard}
                        highlightCard={this.highlightCard}
                    />
                })}
            </div>
        );
    }
};

export default PlayerCardWrapper;