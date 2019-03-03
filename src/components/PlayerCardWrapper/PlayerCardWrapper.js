import React from 'react';
import './PlayerCardWrapper.scss';
import Card from '../Card/Card';

class PlayerCardWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { highlightCard: {} };
    }

    selectCard = (card) => {
        if (card.showFace) {
            const { playerHand } = this.props;

            console.log('Clicked card ', card);

            playerHand.forEach(card => {
                card.highlight = false;
            });

            card.highlight = true;
            this.setState({highlightCard: card});
        }
    }

    render() {
        const { playerHand, player } = this.props;

        return (
            <div className={'player-card-wrapper ' + player}>
                {playerHand.map((card, index) => {
                    card.index = index;
                    return <Card
                        key={index}
                        card={card}
                        totalCards={{ total: playerHand.length, type: 'playerCards' }}
                        selectCard={this.selectCard}
                    />
                })}
            </div>
        );
    }
};

export default PlayerCardWrapper;