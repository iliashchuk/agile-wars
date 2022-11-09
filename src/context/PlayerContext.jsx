import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { Categories } from '../constants/categories';

const PlayerContext = createContext({
  doneTasks: [],
  chackPlayerCategoryRequirement: () => {},
  addDoneTasks: () => {},
});

function PlayerContextProvider({ children }) {
  const [playerCategories, setPlayerCategories] = useState(
    Object.fromEntries(Categories.map((category) => [category, 0])),
  );
  const [doneTasks, setDoneTasks] = useState([]);

  const sortTasksByCategory = (tasks) => tasks.sort(
    (
      { category: categoryA },
      { category: categoryB },
    ) => Categories.indexOf(categoryA) - Categories.indexOf(categoryB),
  );

  const checkPlayerCategoryRequirement = (categories) => {
    for (const category in categories) {
      if (categories[category] > playerCategories[category]) {
        return false;
      }
    }

    return true;
  };

  const addDoneTasks = (task) => {
    setDoneTasks(sortTasksByCategory([...doneTasks, task]));

    const newCategories = playerCategories;
    newCategories[task.category] += 1;
    setPlayerCategories(newCategories);
  };

  const memoizedContext = useMemo(
    () => ({ checkPlayerCategoryRequirement, doneTasks, addDoneTasks }),
    [checkPlayerCategoryRequirement, doneTasks, addDoneTasks],
  );

  return (
    <PlayerContext.Provider
      value={memoizedContext}
    >
      {children}
    </PlayerContext.Provider>
  );
}

const usePlayer = () => useContext(PlayerContext);

export { PlayerContextProvider, usePlayer };
