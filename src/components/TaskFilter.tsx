import { PRIORITIES, PRIORITY_LABELS } from '../types';
import type { FilterValue } from '../hooks/useTasks';

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'Все' },
  ...PRIORITIES.map((priority) => ({ value: priority, label: PRIORITY_LABELS[priority] })),
];

interface TaskFilterProps {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}

export function TaskFilter({ value, onChange }: TaskFilterProps) {
  return (
    <div className="filter" role="group" aria-label="Фильтр по приоритету">
      {FILTERS.map(({ value: filterValue, label }) => {
        const active = filterValue === value;
        return (
          <button
            key={filterValue}
            type="button"
            className={`filter__btn${active ? ' filter__btn_active' : ''}`}
            aria-pressed={active}
            onClick={() => onChange(filterValue)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
