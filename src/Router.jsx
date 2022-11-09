import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Game } from './Game';
import { GameBrowser } from './GameBrowser';

const router = createBrowserRouter(
  [
    { path: '/', element: <GameBrowser /> },
    { path: '/game', element: <Game /> },
  ],
);

export function Router() {
  return (
    <RouterProvider router={router} />
  );
}
