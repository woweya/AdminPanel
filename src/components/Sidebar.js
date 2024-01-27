import './Sidebar.css'
import dropdown from './images/dropdown.png'
import djMixer from './images/djMixer.png'
import gear from './images/gear.png'
import worldGlobe from './images/worldGlobe.png'
import { Fragment } from 'react'



//! UTILIZZO UNA FUNZIONE PER L'ITEM SELEZIONATO
//! extraNav da implementare come props di ItemExtra
const Sidebar = ({ handleItemClick, item }) => {
    const linknav = [
        {id: 1, nome: 'Control Panel'},
        {id: 2, nome: 'Variables'},
        {id: 3, nome: 'Settings'},
        {id: 4, nome: 'Discount'},
        {id: 5, nome: 'Pages & CMS'}
    ]
    const extraNav = [
        {id: 1, nome: 'Docs'},
        {id: 2, nome: 'Dashboard'},
        {id: 3, nome: 'Help'},
    ]
    return (
        <div className="main-content">
        <div className="Sidebar-wrap">
             <h3 style={{textAlign: 'center', marginTop: '2rem'}}>CoralMC</h3>
          <ul className='navigation'>
            {linknav.map((title) => (
            //! onClick "handle" il titolo dell'item selezionato, in base al mapping degli Oggetti tramite .map(title => title.id)
            <>
            {title.id < 3 ? (
             <li key={title.id} onClick={() => handleItemClick(title)}>
             {title.nome}
           </li>
           ) : (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'nowrap', textAlign: 'center', alignItems: 'center' }}>
            <li key={title.id} onClick={() => handleItemClick(title)}>
            {title.nome}
          </li>
          <img src={dropdown} alt="" />
            </div>
           )}
           </>
            ))}
          </ul>
         
           <hr />
           <div className="Extra-nav">
            <ul className="extranavigation">
                {extraNav.map((title) => (
                    
                <li key={title.id} onClick={() => handleItemClick(title)}>
            
            {title.nome}
            </li>
                 ))}
            </ul>
           </div>
        </div>
        <footer className="sidebar-f">
            <div className="footer-buttons">
                <img src={djMixer} alt="mixer" />
                <img src={worldGlobe} alt="world-Globe" />
                <img src={gear} alt="gear" />
            </div>
        </footer>
        </div>
    );
};

export default Sidebar;
