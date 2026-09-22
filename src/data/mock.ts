import type { Task } from '../types';

/** Моковые данные вместо бэкенда: стартовый список задач. */
export const initialTasks: Task[] = [
  {
    id: 't-101',
    title: 'Сверстать страницу задач',
    description: 'Список, фильтр по приоритету, модальное окно создания',
    priority: 'high',
    createdAt: '2026-09-20T09:15:00.000Z',
  },
  {
    id: 't-102',
    title: 'Настроить непрерывный деплой',
    description: 'GitHub Actions: сборка и публикация демо на каждый пуш',
    priority: 'high',
    createdAt: '2026-09-20T10:40:00.000Z',
  },
  {
    id: 't-103',
    title: 'Провести код-ревью фичи фильтрации',
    priority: 'medium',
    createdAt: '2026-09-21T11:05:00.000Z',
  },
  {
    id: 't-104',
    title: 'Обновить зависимости проекта',
    description: 'React, Vite, TypeScript до актуальных минорных версий',
    priority: 'low',
    createdAt: '2026-09-21T13:20:00.000Z',
  },
  {
    id: 't-105',
    title: 'Проверить модалку с клавиатуры',
    description: 'Escape закрывает, фокус не теряется, Enter отправляет форму',
    priority: 'high',
    createdAt: '2026-09-22T08:00:00.000Z',
  },
  {
    id: 't-106',
    title: 'Написать README с решениями',
    priority: 'medium',
    createdAt: '2026-09-22T09:30:00.000Z',
  },
  {
    id: 't-107',
    title: 'Задать вопрос про API формата даты',
    description: 'Уточнить у команды, нужен ли часовой пояс в списке',
    priority: 'low',
    createdAt: '2026-09-22T12:45:00.000Z',
  },
  {
    id: 't-108',
    title: 'Проверить пустое состояние фильтра',
    priority: 'medium',
    createdAt: '2026-09-22T14:10:00.000Z',
  },
];
