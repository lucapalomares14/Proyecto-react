import React from 'react';
import NavBar from "./componentes/NavBar";
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <div className='container my-5' >
      <ItemListContainer greeting="¡Bienvenido a MiTienda! Descubre nuestros productos." />
      </div>
    </>
  );
}

export default App;