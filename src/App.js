import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './App.css';
import Navbar from './common/Navbar/Navbar';
import Headroom from 'react-headroom';
import Rightbar from './common/Rightbar/Rightbar';
import Search from './common/Search/Search';
import Articles from './pages/Articles/Articles';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Headroom className="headroom_style">
        <Navbar />
      </Headroom>
      <div className="divider container">
        <div className="left_divider">
          <Search />
          <Articles />
        </div>
        <div className="right_divider">
          <Rightbar />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
