import {
  createContext, useContext, useMemo, useState,
} from 'react';

import { Tasks } from '../constants/tasks';
import { useCategories } from './CategoryContext';
import { usePlayer } from './PlayerContext';

const TaskContext = createContext({
  tasksInHand: [],
  tasksInDeck: [],
  addToHand: () => {},
  tryCompleteTask: () => {},
});

function TaskContextProvider({ children }) {
  const { checkPlayerCategoryRequirement, addDoneTasks } = usePlayer();
  const { addBugs } = useCategories();
  const [tasksInHand, setTasksInHand] = useState([]);
  const [tasksInDeck, setTasksInDeck] = useState(Tasks);

  const addToHand = (task) => {
    setTasksInDeck(tasksInDeck.filter(({ name }) => name !== task.name));
    setTasksInHand([...tasksInHand, task]);
  };

  const tryCompleteTask = (task) => {
    if (checkPlayerCategoryRequirement(task.requiredCategories)) {
      addBugs(task.bugs);
      addDoneTasks(task);
      setTasksInHand(tasksInHand.filter(({ name }) => name !== task.name));

      return true;
    }

    return false;
  };

  const memoizedContext = useMemo(() => ({
    tasksInHand, tasksInDeck, addToHand, tryCompleteTask,
  }), [tasksInHand, tasksInDeck, addToHand, tryCompleteTask]);

  return (
    <TaskContext.Provider value={memoizedContext}>
      {children}
    </TaskContext.Provider>
  );
}

const useTasks = () => useContext(TaskContext);

export { TaskContextProvider, useTasks };
