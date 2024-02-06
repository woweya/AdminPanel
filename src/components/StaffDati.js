import { useMemo } from 'react';
import check from './images/circle.png';
import cloud from './images/cloud.png';
import hour from './images/hour.png';
//Aggiunta come props sortField
const StaffDati = ({utentiLista, staffColumns, sortField}) => {
   const sortedItem = useMemo(() => {
    if (!sortField) {
      return utentiLista;
    }
    const column = staffColumns.find(column => column.field === sortField);
    const sortedList = [...utentiLista];
     sortedList.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return column.ascending ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return column.ascending ? 1 : -1;
      }
      return 0;
  });
  return sortedList;
  
}, [utentiLista, staffColumns, sortField]); // Aggiunta come dependecies sortField.

  const styleText = {
    backgroundColor: '#1F2A37',
    textAlign: 'left',
    padding:'10px 10px 10px 10px',
    color: 'var(--primary-text)',
    paddingLeft: '10px',
    borderTop: '1px solid #343E4E',
    borderBottom: '1px solid #343E4E',
  }

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
        <tbody style={{width:'100%'}}>
      {//! la lista utenti viene passata come props a Tabella e poi fatto un mapping proprio come in Sidebar.js
      
      sortedItem.map((utente, index) => (
        
      <tr key={utente.id} style={{width:'100%'}}>
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
    )
    
}

export default StaffDati;