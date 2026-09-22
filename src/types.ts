/** Доменные типы приложения. Слой компонентов не знает, откуда приходят данные. */

export const PRIORITIES = ['low', 'medium', 'high'] as const;

export type Priority = (typeof PRIORITIES)[number];

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: 'Низкий',
  medium: 'Средний',
  high: 'Высокий',
};

/** Черновик задачи: то, что вводит пользователь в форме создания. */
export interface TaskDraft {
  title: string;
  description?: string;
  priority: Priority;
}

/** Задача = черновик + идентичность и время создания. */
export interface Task extends TaskDraft {
  id: string;
  createdAt: string; // ISO 8601
}
