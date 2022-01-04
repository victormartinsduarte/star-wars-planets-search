import React from 'react';
// import PlanetsContext from '../context/PlanetsContext';
import TableInfo from './TableInfo';

const tHeadColumns = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
  'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
  'Films', 'Created', 'Edited', 'URL'];

export default function Table() {

  return (
    <table>
      <thead>
        <tr>
          {
            tHeadColumns.map((header) => (
              <th key={ header }>{ header }</th>
            ))
          }
        </tr>
      </thead>
      <TableInfo />
    </table>
  );
}
