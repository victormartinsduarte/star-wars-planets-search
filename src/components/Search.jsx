import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Search() {
  const { nameFilter, data, setPlanetsFilter } = useContext(PlanetsContext);
  const [searchValue, setSearchValue] = useState('');

  const handleFilter = (value) => {
    setSearchValue(value);
    nameFilter(value);
    const searchInputFilter = data.filter(({ name: nameValue }) => (
      nameValue.toLowerCase().includes(value.toLowerCase())
    ));
    setPlanetsFilter(searchInputFilter);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ searchValue }
      onChange={ ({ target: { value } }) => handleFilter(value) }
    />
  );
}
