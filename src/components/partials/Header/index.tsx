import React from 'react';
import './styles.css';
import { useLocation } from 'react-router-dom';
import HeaderLink from '../../atoms/HeaderLink';

function Header() {
  const { pathname } = useLocation()

  return (
    <div className="header-wrapper">
      <header className='header-container'>
        <div>
          <p className='app-title'>Cars<span>List</span></p>
        </div>

        <div className='links-container'>
          <HeaderLink path='/' label='Lista de carros' isActive={pathname === '/'} />
          <HeaderLink path='/novo-carro' label='Adicionar carro' isActive={pathname === '/novo-carro'} />
        </div>
      </header>
    </div>
  );
}

export default Header;
