import React from "react";
import home from './images/home.png';

//!Implementare extraNav = titoloExtra
function NavLocation ({titolo, titoloExtra}){
    const cardStyle ={
        minWidth: '10%',
        width: '100%',
        maxWidth: '11%',
        minHeight: '3%',
        maxHeight: '3%',
        border: 'none',
        padding:  '10px 10px 10px 10px',
        backgroundColor: '#1F2A37',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    
    }
    const textStyle = {
        color: 'var(--secondary-color)',
        fontWeight: 'lighter',
        minWidth: '100%',
        textAlign: 'left',
        padding: '0',
        margin:'0'
    }
    return (
        <div className='page-location' style={cardStyle}>
        {titolo && (
            <>
            <img src={home} style={{width: '15px', height: '15px', padding:'0px 10px 0px 30px'}} alt="" />
            <h5 style={textStyle}>{titolo.nome} &gt; Dashboard </h5>
            </>
        )}
        </div>
    )

}

export default NavLocation;