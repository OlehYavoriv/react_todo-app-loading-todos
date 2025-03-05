import cn from 'classnames';
import React, { MouseEvent } from 'react';
import { Filter } from '../../types/Filter';

interface FooterProps {
  activeCount: number;
  currentFilter: Filter;
  setCurrentFilter: (filter: Filter) => void;
}

export const Footer: React.FC<FooterProps> = ({
  activeCount,
  currentFilter,
  setCurrentFilter,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${activeCount} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', { selected: currentFilter === 'all' })}
          data-cy="FilterLinkAll"
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            setCurrentFilter(Filter.All);
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: currentFilter === 'active',
          })}
          data-cy="FilterLinkActive"
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            setCurrentFilter(Filter.Active);
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: currentFilter === 'completed',
          })}
          data-cy="FilterLinkCompleted"
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            setCurrentFilter(Filter.Completed);
          }}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
