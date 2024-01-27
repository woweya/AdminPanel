// App.js
import './App.css';
import Home from './components/Home.js';
import Sidebar from './components/Sidebar.js';
import { useState } from 'react';

//! Utilizzo un useState per "ricordare" lo stato dell'Item cliccato
function App() {
  const [Item, setItem] = useState(null);
  function handleChangeItem(Item){
    setItem(Item);
  }

  return (
    /*      <!-- Ritorno il valore Item per visualizzarlo nella home (rig.21) -->*/
      /*      <!--Ritorno l'item cliccato di "handleChangeItem" al onClick "handleItemClick" di Sidebar.js (rig.20) -->*/
    <div className="App">
      <div className="sidebar-container">
      <Sidebar handleItemClick={handleChangeItem}/>
      </div>
      <Home Item={Item}/>
      
    </div>
  );
}

export default App;
