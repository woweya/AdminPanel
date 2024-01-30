import React, { useState } from "react";
import './Home.css';
import NavLocation from './NavLocation.js';
import InfoCard from './InfoCard.js';
import Tabella from './Tabella.js';

//! Importo l'Item preso dall'App.js
//! Componente Home padre per la home principale, qui troviamo la utentiLista, con i corrispettivi chiave e valore

const Home = ({ Item, ItemExtra, utentiLista }) => {
   utentiLista = [
    {id: 1, username: 'FEDERICOSCHI', data: '...', amount: 2000, status: 'Completed'},
    {id: 2, username: 'Feryzz', data: '...', amount: 15, status: 'Completed'},
    {id: 3, username: 'Cinquanta', data: '...', amount: 27, status: 'Pending'},
    {id: 4, username: 'NotAffected', data: '...', amount: 50, status: 'In progress'},
    {id: 5, username: 'Ytnoos', data: '...', amount: 12, status: 'Completed'},
    {id: 6, username: 'Mattia882', data: '...', amount: 33, status: 'In progress'}
  ]
  return (
    /*Creo una nuova componente, ovvero NavLocation.js, con una semplice funzione di return */
  <main className="home">

      {Item == null ? null : (
        <>
        <NavLocation titolo={Item}/>
      <div className="card-row-4">
      <InfoCard utentiLista={utentiLista}/>
      </div>
      <div className="table" style={{marginTop: '2rem'}}>
      <Tabella utentiLista={utentiLista} />
      </div>
      
      </>
      )}
      
  </main>
  );
}
export default Home;
