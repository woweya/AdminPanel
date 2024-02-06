
import React , { useState } from 'react';
import Home from './Home';
import StaffDati from './StaffDati';
import ColonneStaff from './ColonneStaff';
//! Componente per la generazione della LISTA.
const Tabella = ({utentiLista}) => {
  const styleTh = {
    backgroundColor: '#374151',
    color: 'var(--primary-text)',
    textAlign: 'left',
    padding: '20px 0px 20px 10px',
    cursor: 'pointer',
  }; 
  // AGGIUNGO UN SET STATE DEL FIELD DELLE COLUMNS, E LO SETTO AL CLICK di handleSort.
  const [sortField, setSortField] = useState(null);
  const handleSort = (field) => {
    const column = staffColumns.find(column => column.field === field);
    if(column?.isSortable){
      column.ascending = !column.ascending;
      setStaffColumns([...staffColumns]);
      setSortField(field);
    }
  };
  const [staffColumns, setStaffColumns] = useState([
    {
    name: 'ID',
    field: 'id',
    type: 'number',
    style: styleTh,
    ascending: true,
    isSortable: true,
  },
  {
      name: 'Username',
      field: 'username',
      type: 'string',
      style: styleTh,
      ascending: true,
      isSortable: true,
  },
  {
      name: 'Data',
      field: 'data',
      type: 'string',
      style: styleTh,
      ascending: false,
      isSortable: false,
  },
  {
      name: 'Amount',
      field: 'amount',
      type: 'number',
      style: styleTh,
      ascending: true,
      isSortable: true,
  },
  {
      name: 'Status',
      field: 'status',
      type: 'string',
      style: styleTh,
      ascending: true,
      isSortable: true,
  },
  
]);
 
  const styleTable = {
    width: '95%',
    textAlign: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
    borderCollapse: 'collapse',
    borderSpacing: '0 0px',
  }

  

  
   return (
    <table className="table" style={styleTable}>
    <ColonneStaff staffColumns={staffColumns} handleSort={handleSort}/>
    <StaffDati utentiLista={utentiLista} staffColumns={staffColumns} sortField={sortField}/>
  </table>
);
}

export default Tabella;