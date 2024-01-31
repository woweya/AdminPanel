import React, {useState, useTransition } from "react"
const ColoneStaff = ({utentiLista, setUtentiLista}) => {
    
    const styleTr = {
        backgroundColor: '#374151',
        color: 'var(--primary-text)',
        textAlign: 'left',
      }
      const [sortOrder, setSortOrder] = useState({
        field: '',
        ascending: true,
      });
      const StaffColums = [{
        id: 'ID',
        username: 'USERNAME',
        data: 'DATA TIME',
        amount: 'AMOUNT',
        status: 'STATUS',
        sort: (field) =>{
            const ascending = sortOrder.field === field ? !sortOrder.ascending : true;

            let sortedList;
            console.log(field)
            if (field === 'ID') {
                sortedList = [...utentiLista].sort((a, b) => (ascending ? a.id - b.id : b.id - a.id));
              
            }else if(field === 'USERNAME'){
             sortedList = [...utentiLista].sort((a, b) => (ascending ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username)));
               
            }else if(field === 'DATA TIME'){
                sortedList = [...utentiLista].sort((a, b) => (ascending ? a.data.localeCompare(b.data) : b.data.localeCompare(a.data)));
               
            }else if(field === 'AMOUNT'){
                sortedList = [...utentiLista].sort((a, b) => (ascending ? a.amount - b.amount : b.amount - a.amount));
               
            }else if(field === 'STATUS'){
                sortedList = [...utentiLista].sort((a, b) => (ascending ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)));
            }
             setSortOrder({ field, ascending });
            setUtentiLista(sortedList);
        }
      }]
      
    return (
        <thead>
 
        {StaffColums.map((staff) =>(
        
        <tr style={{...styleTr}}>
        <th key={staff.id} onClick={() => staff.sort(staff.id)} style={{padding:'20px 0px 20px 10px', cursor: 'pointer'}}>{staff.id}</th>
        <th key={staff.username} onClick={() => staff.sort(staff.username)} style={{padding:'20px 0px 20px 10px', cursor: 'pointer'}}>{staff.username}</th>
        <th key={staff.data} onClick={() => staff.sort(staff.data)} style={{padding:'20px 0px 20px 10px', cursor: 'pointer'}}>{staff.data}</th>
        <th key={staff.amount} onClick={() => staff.sort(staff.amount)} style={{padding:'20px 0px 20px 10px', cursor: 'pointer'}}>{staff.amount}</th>
        <th key={staff.status} onClick={() => staff.sort(staff.status)} style={{padding:'20px 0px 20px 10px', cursor: 'pointer'}}>{staff.status}</th>
        </tr>
    
        ))}
     
    </thead>
    )
}
export default ColoneStaff;