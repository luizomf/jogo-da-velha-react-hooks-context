import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Board() {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } = useContext(
    GameContext
  );

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner('');
    setHistory([]);
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}
