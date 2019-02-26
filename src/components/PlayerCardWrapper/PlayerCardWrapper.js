import React from 'react';
import './PlayerCardWrapper.scss';
import Card from '../Card/Card';

const PlayerCardWrapper = (props) => {
    return (
        <div className={"player-card-wrapper " + props.player}>
            {props.playerHand.map((card, index) => {
                card.index = index;
                return <Card key={index} card={card} totalCards={{total: props.playerHand.length, type: 'playerCards'}} />
            })}
        </div>
    );
};

export default PlayerCardWrapper;