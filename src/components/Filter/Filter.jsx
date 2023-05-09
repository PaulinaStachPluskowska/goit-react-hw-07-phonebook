import css from './Filter.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Selectors';
import { handleFilter } from 'redux/FilterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(handleFilter(event.currentTarget.value));
  };


    return (
        <label className={css.label}>
            Find contacts by Name
            <input className={css.input}
                type="text"
                name="filter"
                filter={filter}
                onChange={event => handleChange(event)}
            />
        </label>
    );
};

export default Filter;