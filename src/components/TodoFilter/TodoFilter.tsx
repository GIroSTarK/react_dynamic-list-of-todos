import React from 'react';
import { FilterOptions } from '../../types/FilterOptions';

type Props = {
  query: string;
  onChange: (input: string) => void;
  setFilterOption: (option: FilterOptions) => void;
};

export const TodoFilter: React.FC<Props> = ({
  onChange,
  query,
  setFilterOption,
}) => (
  <form className="field has-addons" onSubmit={event => event.preventDefault()}>
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          onChange={event =>
            setFilterOption(event.target.value as FilterOptions)
          }
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={event => onChange(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {query && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => onChange('')}
          />
        </span>
      )}
    </p>
  </form>
);