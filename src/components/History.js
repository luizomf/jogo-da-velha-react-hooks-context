import React, { useContext } from 'react';
import uuid from 'uuid/v4';

import { GameContext } from '../contexts/GameContext';

export default function Board() {
  const {
    history,
    setHistory,
    setSquares,
    setIsXNext,
    setWhoIsWinner,
  } = useContext(GameContext);

  function handleClick(index) {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[index].squares);
    setIsXNext(history[index].isXNext);
    setWhoIsWinner(history[index].whoIsWinner);
  }

  return (
    <div>
      {history.map((data, index) => (
        <div key={uuid()} className="history">
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
