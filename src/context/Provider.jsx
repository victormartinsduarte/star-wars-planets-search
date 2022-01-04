import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import useFetch from '../myHooks/useFetch';
import useFilter from '../myHooks/useFilter';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Provider({ children }) {
  const [data] = useFetch(URL);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [nameFilter, filterObj, setFilter] = useFilter();

  const context = {
    data,
    planetsFilter,
    nameFilter,
    filterObj,
    setFilter,
    setPlanetsFilter,
  };

  useEffect(() => {
    setPlanetsFilter(data);
  }, [data]);

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
