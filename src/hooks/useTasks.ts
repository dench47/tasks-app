import { useCallback, useMemo, useState } from 'react';
import { initialTasks } from '../data/mock';
import type { Task, TaskDraft } from '../types';

export type FilterValue = Task['priority'] | 'all';

/**
 * Единственный источник состояния списка задач.
 * Компоненты получают данные и действия, но не трогают useState напрямую.
 */
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<FilterValue>('all');

  const addTask = useCallback((draft: TaskDraft) => {
    setTasks((prev) => [
      { ...draft, id: crypto.randomUUID(), createdAt: new Date().toISOString() },
      ...prev,
    ]);
  }, []);

  // Фильтр — производное состояние: пересчитывается только при смене задач или фильтра.
  const visibleTasks = useMemo(
    () => (filter === 'all' ? tasks : tasks.filter((task) => task.priority === filter)),
    [tasks, filter],
  );

  return {
    visibleTasks,
    totalCount: tasks.length,
    filter,
    setFilter,
    addTask,
  };
}
