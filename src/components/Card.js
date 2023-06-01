import React from 'react';
import styles from '../styles/Card.module.css';

function Card({ image, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt="Memory card" className={styles.cardImage} />
    </div>
  );
}

export default Card;