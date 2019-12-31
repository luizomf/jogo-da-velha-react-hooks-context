import React from 'react';
import './Home.css';

import GameContextProvider from '../contexts/GameContext';
import Board from '../components/Board';

export default function Home() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}
