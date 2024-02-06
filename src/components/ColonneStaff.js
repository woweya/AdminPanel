import React, {useState, useMemo, useEffect } from "react"
import StaffDati from "./StaffDati";
const ColoneStaff = ({staffColumns, handleSort}) => {
    
    const styleTr = {
        backgroundColor: '#374151',
        color: 'var(--primary-text)',
        textAlign: 'left',
      }

    return (
        <thead>
 <tr style={{...styleTr}}>

        {staffColumns.map((column) =>  {
            return(
             <th key={column.field} onClick={() =>handleSort(column.field)} style={column.style}>
             {column.name}
            </th>  
            )
        })
    }
   
     </tr>
    </thead>
    );
}

export default ColoneStaff;