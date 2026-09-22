import { useState } from 'react';
import { CreateTaskModal } from './components/CreateTaskModal';
import { TaskFilter } from './components/TaskFilter';
import { TaskList } from './components/TaskList';
import { useTasks } from './hooks/useTasks';

export default function App() {
  const { visibleTasks, totalCount, filter, setFilter, addTask } = useTasks();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="page">
      <header className="header">
        <h1 className="header__title">
          Задачи <span className="header__count">{totalCount}</span>
        </h1>
        <button className="btn btn_primary" onClick={() => setModalOpen(true)}>
          + Новая задача
        </button>
      </header>

      <TaskFilter value={filter} onChange={setFilter} />
      <TaskList tasks={visibleTasks} />

      <CreateTaskModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={addTask}
      />
    </main>
  );
}
