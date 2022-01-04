import { useState } from 'react';

const INITIAL_FILTER = {
  filters: {
    filterByName: {},
  },
};

export default function useFilter() {
  const [filterObj, setFilter] = useState(INITIAL_FILTER);

  const nameFilter = (value) => {
    setFilter({
      filters:
      {
        ...filterObj.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };
  return [nameFilter, filterObj, setFilter];
}
