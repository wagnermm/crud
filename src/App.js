import * as React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/home/Home';
import Clientes from './components/clientes/Clientes';
import Sobre from './components/sobre/Sobre';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

import './App.css';

function App() {
  const [active, setActive] = useState("nav-mobile");
  const [toggleIcon, setToggleIcon] = useState("btn-mobile");

  const navToggle = ()=> { 
    active === 'nav-mobile' ? setActive('nav-mobile nav-active') : setActive('nav-mobile');
    toggleIcon === 'btn-mobile' ? setToggleIcon('btn-mobile toggle') : setToggleIcon('btn-mobile');
  };
const [close, setClose] = useState("close-menu");
const closeMenu=()=> {
    close === "menu-close" ? setClose('menu-close nav__active') : setClose("menu-close");
    active === 'nav-mobile' ? setActive('nav-mobile nav-active') : setActive('nav-mobile');
    toggleIcon === 'btn-mobile' ? setToggleIcon('btn-mobile toggle') : setToggleIcon('btn-mobile');
  }
  return (
    <ChakraProvider>
      <BrowserRouter>
        <header className='header'>
          <div >
            <img src={logo} className='logo' alt="logo" />
          </div>
          <nav className='nav'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/clientes">Cadastro</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </nav>
          <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            <nav className={active}>
                <div onClick={closeMenu} className="close-menu">X</div>
              <ul className={close}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/clientes">Cadastro</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
            </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/clientes' element={<Clientes/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
