import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from 'react';
import { PRIORITIES, PRIORITY_LABELS, type Priority, type TaskDraft } from '../types';

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (draft: TaskDraft) => void;
}

/**
 * Модальное окно на нативном <dialog>: Escape и фокус-ловушка из коробки,
 * без единой сторонней библиотеки. Состоянием открытия управляет родитель,
 * а синхронизацию React-состояния с нативным элементом делает эффект.
 */
export function CreateTaskModal({ open, onClose, onCreate }: CreateTaskModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Новая задача начинается с чистой формы.
  useEffect(() => {
    if (open) {
      setTitle('');
      setDescription('');
      setPriority('medium');
    }
  }, [open]);

  // Нативное закрытие по Escape гасим, чтобы единственный источник
  // истины о состоянии остался в React.
  const handleCancel = (event: FormEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onClose();
  };

  // Клик по подложке: событие пришло в сам <dialog>, а не в его детей.
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    onCreate({
      title: trimmedTitle,
      description: description.trim() || undefined,
      priority,
    });
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
    >
      <form className="modal__form" onSubmit={handleSubmit}>
        <h2 id="modal-title" className="modal__title">
          Новая задача
        </h2>

        <label className="field">
          <span className="field__label">Название</span>
          <input
            className="field__input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            maxLength={120}
            autoFocus
          />
        </label>

        <label className="field">
          <span className="field__label">Описание (необязательно)</span>
          <textarea
            className="field__textarea"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            maxLength={500}
          />
        </label>

        <label className="field">
          <span className="field__label">Приоритет</span>
          <select
            className="field__select"
            value={priority}
            onChange={(event) => setPriority(event.target.value as Priority)}
          >
            {PRIORITIES.map((value) => (
              <option key={value} value={value}>
                {PRIORITY_LABELS[value]}
              </option>
            ))}
          </select>
        </label>

        <div className="modal__actions">
          <button type="button" className="btn btn_secondary" onClick={onClose}>
            Отмена
          </button>
          <button type="submit" className="btn btn_primary" disabled={!title.trim()}>
            Создать
          </button>
        </div>
      </form>
    </dialog>
  );
}
