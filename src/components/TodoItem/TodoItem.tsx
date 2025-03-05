import React from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  const handleCheckboxChange = () => {
    onToggle(todo.id);
  };

  return (
    <div data-cy="Todo" className={cn('todo', { completed: todo.completed })}>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}

      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
      </label>
      <span className="todo__title" data-cy="TodoTitle">
        {todo.title}
      </span>
      <button type="button" className="todo__remove" data-cy="TodoDelete">
        ×
      </button>
      <div data-cy="TodoLoader" className="modal overlay">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
