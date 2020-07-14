import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import Label from './components/Label.js';
import styled, { ThemeProvider } from 'styled-components';


const backgroundColor = {
  primary: '#264653',
  secondary: '#2A9D8F',
  tertiary: '#F4A261'
};

// using the primary color: ${props => props.backgroundColor.primary};

function App() {
  return (
    <ThemeProvider theme={backgroundColor}>

      <div className="App">

          <Navbar />
    
            <Card color="primary" />
              <h1> {backgroundColor.primary}</h1>
      
            <Card />
              <h1> {backgroundColor.secondary}</h1>
    
            <Card />
              <h1> {backgroundColor.tertiary}</h1>

    
      </div>
    </ThemeProvider>
  );
}

export default App;
