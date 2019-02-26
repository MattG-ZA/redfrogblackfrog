import React from 'react';
import './CentreCardWrapper.scss';
import Card from '../Card/Card';

class CentreCardWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { circleCards: props.circleCards };

        this.addCard = this.addCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }

    // Test only code
    addCard = () => {
        const circleCards = this.state.circleCards;
        circleCards.push({ value: 10, suit: "hearts", display: 10, showFace: true, index: circleCards.length });
        this.setState({ circleCards });
    }

    removeCard = () => {
        let circleCards = this.state.circleCards;
        circleCards.splice(circleCards.length - 1, 1);
        this.setState({ circleCards });
    }
    // End of test only code

    render() {
        return (
            <span>
                <button style={{ display: 'block' }} onClick={this.addCard}>Add</button>
                <button style={{ display: 'block' }} onClick={this.removeCard}>Remove</button >
                
                <div className='circle-container'>
                    {this.state.circleCards.map((card, index) => {
                        card.index = index;
                        return <Card key={index} card={card} totalCards={{total: this.state.circleCards.length, type: 'centreCards'}} />
                    })}
                </div>
            </span>
        );
    }
}

export default CentreCardWrapper;