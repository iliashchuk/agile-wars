import { useState } from 'react';

import { Task } from '../Task';
import { useTasks } from '../../context/TaskContext';

import { Base } from './styled';

export function Hand() {
  const { tasksInHand, tryCompleteTask } = useTasks();
  const [hoveredTask, setHoveredTask] = useState();

  const tasksInHandNumber = tasksInHand.length;

  const getTaskAngle = (index) => {
    const center = (tasksInHandNumber + 1) / 2;
    const distanceFromCenter = index + 1 - center;
    return distanceFromCenter * 7;
  };

  const getTaskXOffset = (index) => {
    const center = (tasksInHandNumber + 1) / 2;
    const distanceFromCenter = index + 1 - center;
    return (center - distanceFromCenter * 50) + 50;
  };

  const getZIndex = (index, name) => {
    if (name === hoveredTask) {
      return tasksInHandNumber;
    }

    return index;
  };

  const hoverTask = (name) => {
    setHoveredTask(name);
  };

  return (
    <Base>
      {tasksInHand.map((task, index) => (
        <Task
          key={task.name}
          onClick={() => tryCompleteTask(task)}
          {...task}
          handProps={{
            zIndex: getZIndex(index, task.name),
            YoffsetInHand: hoveredTask === task.name && 16,
            XTransofrmOffsetInHand: getTaskXOffset(index),
            angle: getTaskAngle(index),
            onMouseEnter: () => hoverTask(task.name),
            onMouseLeave: () => setHoveredTask(),
          }}
        />
      ))}
    </Base>
  );
}
