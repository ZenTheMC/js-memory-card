import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import styles from './styles/App.module.css';

// NOT ALL CARDS ARE SHOWING UP!
function App() {
  // Initialize card data
  const initialCards = [
    { id: 1, image: '/images/mankey.jpg', clicked: false },
    { id: 2, image: '/images/psyduck.jpg', clicked: false },
    { id: 3, image: '/images/bulbasaur.jpg', clicked: false },
    { id: 4, image: '/images/squirtle.jpg', clicked: false },
    { id: 5, image: '/images/charmander.jpg', clicked: false },
    { id: 6, image: '/images/venusaur.jpg', clicked: false },
    { id: 7, image: '/images/blastoise.jpg', clicked: false },
    { id: 8, image: '/images/charizard.jpg', clicked: false },
    { id: 9, image: '/images/golem.jpg', clicked: false },
    { id: 10, image: '/images/alakazam.jpg', clicked: false },
    { id: 11, image: '/images/nidoking.jpg', clicked: false },
    { id: 12, image: '/images/nidoqueen.jpg', clicked: false },
  ];

  // State variables
  const [cards, setCards] = useState(initialCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Function to shuffle cards
  const shuffleCards = useCallback(() => {
    setCards(cards => [...cards].sort(() => Math.random() - 0.5));
  }, []);

  // Effect to shuffle cards when component mounts
  useEffect(() => {
    shuffleCards();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only runs once when the component mounts, cause empty array, but linting error. Breaks game causing immediate and infinite shuffle if fixed. That's why there's an ignore like above useEffect

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
    <div className={styles.App}>
    <h1>Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
