import { memo } from 'react';
import { PRIORITY_LABELS, type Task } from '../types';

const DATE_FORMAT = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' });

// Строка списка перерисовывается только при изменении своих данных,
// а не при каждом вводе в фильтре или модалке.
export const TaskItem = memo(function TaskItem({ task }: { task: Task }) {
  return (
    <li className="task">
      <div className="task__main">
        <span className="task__title">{task.title}</span>
        {task.description && <span className="task__desc">{task.description}</span>}
      </div>
      <span className={`badge badge_${task.priority}`}>{PRIORITY_LABELS[task.priority]}</span>
      <time className="task__date" dateTime={task.createdAt}>
        {DATE_FORMAT.format(new Date(task.createdAt))}
      </time>
    </li>
  );
});
