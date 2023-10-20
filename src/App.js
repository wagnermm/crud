import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Container from './components/container/Container';

function App() {
  return (
    <ChakraProvider>
      <Container/>
    </ChakraProvider>
  );
}

export default App;
