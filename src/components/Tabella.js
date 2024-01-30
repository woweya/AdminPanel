import check from './images/circle.png';
import cloud from './images/cloud.png';
import hour from './images/hour.png';
import React , { useState } from 'react';

//! Componente per la generazione della LISTA.
const Tabella = ({utentiLista}) => {
  const [orderBy, setOrderBy] = useState('');
   function handleOrderBy(orderBy){
    setOrderBy(orderBy);
    if(orderBy === 'username'){
      utentiLista.sort((b, a) => a.username.localeCompare(b.username));
    }
    if(orderBy === 'amount'){
      utentiLista.sort((a, b) => a.amount - b.amount); 
    }
    if(orderBy === 'status'){
      utentiLista.sort((b, a) => a.status.localeCompare(b.status));
    }
    if(orderBy === 'id'){
      utentiLista.sort((a, b) => a.id - b.id);
      
    }
   }
  const styleTable = {
    width: '95%',
    textAlign: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
    borderCollapse: 'collapse',
    borderSpacing: '0 0px',
  }

  const styleTr = {
    backgroundColor: '#374151',
    color: 'var(--primary-text)',
    textAlign: 'left',
  }

  const styleText = {
    backgroundColor: '#1F2A37',
    textAlign: 'left',
    padding:'10px 10px 10px 10px',
    color: 'var(--primary-text)',
    paddingLeft: '10px',
    borderTop: '1px solid #343E4E',
    borderBottom: '1px solid #343E4E',
  }
  //Funzione di ordinamento personalizzata 

  //! Switch case per lo status di un utente

  const getStatusStyle = (status) => {
  switch (status) {
    case 'Completed':
      return ({ color: 'lightgreen',
                src: check
      });
    case 'Pending':
      return { color: 'yellow',
                src: hour
    };
    case 'In progress':
      return { color: '#A992F6',
                src: cloud
    };
    default:
      return {};
  }
};


   return (
    <table className="table" style={styleTable}>
    <thead>
      <tr style={{...styleTr}}>
        <th style={{padding:'20px 0px 20px 10px', cursor: 'pointer'}} onClick={() => handleOrderBy('id')}>ID</th>
        <th style={{padding:'10px', cursor: 'pointer'}} onClick={() => handleOrderBy('username')} >USERNAME</th>
        <th style={{padding:'10px', cursor: 'pointer'}} onClick={() => handleOrderBy('data')}>DATA TIME</th>
        <th style={{padding:'10px', cursor: 'pointer'}} onClick={() => handleOrderBy('amount')}>AMOUNT</th>
        <th style={{padding:'10px', cursor: 'pointer'}} onClick={() => handleOrderBy('status')}>STATUS</th>
      </tr>
    </thead>
    <tbody>
      {//! la lista utenti viene passata come props a Tabella e poi fatto un mapping proprio come in Sidebar.js
      utentiLista.slice().reverse().map((utente, index) => (
        
      <tr key={utente.id}>
        <td style={{...styleText, borderLeft: index === -1  ? 'none' : '1px solid #343E4E'}}>{utente.id}</td>
        <td style={styleText}>{utente.username}</td>
        <td style={styleText}>{utente.data}</td>
        <td style={styleText}>{utente.amount}€</td>
        <td style={{...styleText, borderRight: index === utentiLista.length  ? 'none' : '1px solid #343E4E' }}>

          <div style={{color: getStatusStyle(utente.status).color, 
                       width: 'fit-content', 
                       padding:'5px', 
                       border:`1px solid ${getStatusStyle(utente.status).color}`, 
                       borderRadius: '10px', 
                       fontSize: '10px',
                       backgroundColor: '#374151',
                       display: 'flex',
                       flexDirection: 'row', 
                       flexWrap: 'no-wrap',
                       alignContent: 'center', 
                       gap: '5px'}}>
                        <img src={getStatusStyle(utente.status).src} alt="" />
          {utente.status}
          </div>
          </td>
      
      </tr>
      ))}
    </tbody>
  </table>
);
}

export default Tabella;