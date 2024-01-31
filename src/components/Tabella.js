
import React , { useState } from 'react';
import Home from './Home';
import StaffDati from './StaffDati';
import ColonneStaff from './ColonneStaff';
//! Componente per la generazione della LISTA.
const Tabella = ({utentiLista, setUtentiLista}) => {

 
  const styleTable = {
    width: '95%',
    textAlign: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
    borderCollapse: 'collapse',
    borderSpacing: '0 0px',
  }

  

  
   return (
    <table classNae="table" style={styleTable}>
    <ColonneStaff utentiLista={utentiLista} setUtentiLista={setUtentiLista}/>
    <StaffDati utentiLista={utentiLista}/>
  </table>
);
}

export default Tabella;