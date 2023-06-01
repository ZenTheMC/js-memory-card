import React from 'react';
import styles from '../styles/Scoreboard.module.css';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.score}>
        Current Score: {currentScore}
      </div>
      <div className={styles.score}>
        Best Score: {bestScore}
      </div>
    </div>
  );
}

export default Scoreboard;