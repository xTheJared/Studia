import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budżet from './components/Budżet';
import Pozostało from './components/Pozostało';
import WszystkieWydatki from './components/WszystkieWydatki';
import WydatkiLista from './components/WydatkiLista';
import DodajWydatekOkno from './components/DodajWydatekOkno';
import { AppContext, AppProvider } from './context/AppContext';

const App = () => {
    return(

      <AppProvider>

<div className='container'>
        <h1 className='mt-3'>Budżet na ten miesiąc</h1>
        <div className='row mt-3'>
        <div className='col-sm'>
          <Budżet />
      </div>
      <div className='col-sm'>
        <Pozostało />
      </div>
      <div className='col-sm'>
        <WszystkieWydatki />
      </div>
      </div>
      <h3 className='mt-3'>Wydatki</h3>
      <div className='row '>
      <div className='col-sm'>
        <WydatkiLista />
      </div>
      </div>
      <h3 className='mt-3'>Dodaj wydatek</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <DodajWydatekOkno />
        </div>
      </div>
      </div>
      </AppProvider>
    
    )
  };

export default App;