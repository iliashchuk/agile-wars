import { Task, TaskBackside } from '../Task';
import { useTasks } from '../../context/TaskContext';

import { Base } from './styled';

export function Deck() {
  const { addToHand, tasksInDeck } = useTasks();

  return (
    <Base>
      <TaskBackside key="backside" />
      {tasksInDeck.map(
        (task) => <Task onClick={() => addToHand(task)} key={task.name} {...task} />,
      )}
    </Base>
  );
}
