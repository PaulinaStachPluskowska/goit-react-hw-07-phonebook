import { nanoid } from '@reduxjs/toolkit';
import css from './Filter.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/FilterSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const filterId = nanoid();

  useEffect(() => { 
    dispatch(handleFilter(filter));
    // eslint-disable-next-line
  }, [filter]);

  const handleChange = event => {
    setFilter(event.currentTarget.value);
  };

    return (
      <label className={css.label}>
            Find contacts by Name
            <input className={css.input}
                type="text"
                name="filter"
                id={filterId}
                filter={filter}
                onChange={handleChange}
            />
        </label>
    );
};

export default Filter;