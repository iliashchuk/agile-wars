import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import * as uuid from 'uuid';

import { CategoriesRow } from '../components/CategoriesRow';
import { Deck } from '../components/Deck';
import { Hand } from '../components/Hand';
import { DonePile } from '../components/DonePile';
import { TaskContextProvider } from '../context/TaskContext';
import { CategoryContextProvider } from '../context/CategoryContext';
import { PlayerContextProvider } from '../context/PlayerContext';

export function Game() {
  const [players, setPlayers] = useState(0);

  useEffect(() => {
    const socket = io('localhost:4000', { autoConnect: false, auth: { token: uuid.v4() } });
    socket.connect();

    socket.on('game-info', ({ playerCount }) => setPlayers(playerCount));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <PlayerContextProvider>
      <CategoryContextProvider>
        <TaskContextProvider>
          <div className="App">
            <CategoriesRow />
            <Deck />
            <Hand />
            <DonePile />
            <h1>
              № of players
              {players}
            </h1>
          </div>
        </TaskContextProvider>
      </CategoryContextProvider>
    </PlayerContextProvider>
  );
}
