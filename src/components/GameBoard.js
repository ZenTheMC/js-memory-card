import React from 'react';
import Card from './Card';
import styles from '../styles/GameBoard.module.css';

function GameBoard({ cards, onCardClick }) {
  return (
    <div className={styles.gameBoard}>
      {cards.map(card => (
        <Card
          key={card.id}
          image={card.image}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default GameBoard;