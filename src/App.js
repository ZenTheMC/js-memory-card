import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';

function App() {
  // Initialize card data
  const initialCards = [
    { id: 1, image: 'image1.png', clicked: false },
    { id: 2, image: 'image2.png', clicked: false },
    // Add more cards as needed
  ];

  // State variables
  const [cards, setCards] = useState(initialCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Function to shuffle cards
  const shuffleCards = useCallback(() => {
    let shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, [cards]);

  // Effect to shuffle cards when component mounts
  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  // Function to handle when a card is clicked
  const handleCardClick = (id) => {
    const cardIndex = cards.findIndex(card => card.id === id);
    if (cards[cardIndex].clicked) {
      // If the card has been clicked before, reset the game
      setCurrentScore(0);
      setCards(initialCards.map(card => ({ ...card, clicked: false })));
    } else {
      // If the card hasn't been clicked before, update the game state
      let updatedCards = [...cards];
      updatedCards[cardIndex].clicked = true;
      setCards(updatedCards);
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    }
    shuffleCards();
  };

  return (
    <div className="App">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
