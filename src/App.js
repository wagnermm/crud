import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Table from './components/table/Table';

function App() {
  return (
    <ChakraProvider>
      <Table/>
    </ChakraProvider>
  );
}

export default App;
