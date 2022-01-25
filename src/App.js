//Inbuilt React functions and components
import {useState} from 'react';

// JS Components and Pages
import './App.css';
// import Starshipcard from './components/StarShipCard';
import Planets from './pages/planets';
import SwApi from './services/sw-api';

function App() {
  const [data,setData]=useState([])
  return (
    <div className="App">
      <h1> Star Wars STAR SHIPS </h1>
      <SwApi/>       
    </div>
  );
}

export default App;
