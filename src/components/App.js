import React, { Component } from 'react';
import PlayingArea from './PlayingArea/PlayingArea';
import { BuildCardDeck, ShuffleCardDeck, DealOpeningCircle, DealPlayerHands } from '../logic/GameInit';

class App extends Component {
  render() {
    const deck = BuildCardDeck();
    const shuffledDeck = ShuffleCardDeck(deck);
    const circleCards = DealOpeningCircle(shuffledDeck);
    const playerHands = DealPlayerHands(shuffledDeck);

    return <PlayingArea
      shuffledDeck={shuffledDeck}
      circleCards={circleCards}
      playerHands={playerHands}
    />;
  }
}

export default App;