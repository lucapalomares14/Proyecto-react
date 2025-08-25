import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#eee' }}>
      <div>
        <h1>MiTienda</h1>
      </div>
      <div>
        <a href="#">Inicio</a> | 
        <a href="#">Productos</a> | 
        <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;