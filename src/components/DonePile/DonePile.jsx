import { usePlayer } from '../../context/PlayerContext';
import { Task } from '../Task';

import { Base } from './styled';

export function DonePile() {
  const { doneTasks } = usePlayer();

  return (
    <Base>
      {doneTasks.map((task) => (
        <Task
          key={task.name}
          {...task}
        />
      ))}
    </Base>
  );
}
