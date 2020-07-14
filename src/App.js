import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import Label from "./components/Label.js";

function App() {
  return (
    <div className="App center">

        <Navbar />

      <div class="flex">

          <div class="card-container spacing background-color">
            <Card />
            <Label />
          </div>

          <div class="card-container spacing">
            <Card />
            <Label />
          </div>

          <div class="card-container spacing">
            <Card />
            <Label />

          </div>
      </div>
    </div>
  );
}

export default App;
