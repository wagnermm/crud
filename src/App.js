import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Lista from './components/lista/Lista';
import Clientes from './components/clientes/Clientes';
import Sobre from './components/sobre/Sobre';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <header className='header'>
          <div className='logo'>Logo</div>
          <nav className='nav'>
            <ul>
              <li><Link to="/">Lista</Link></li>
              <li><Link to="/clientes">Cadastro</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Lista/>}></Route>
          <Route path='/clientes' element={<Clientes/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
