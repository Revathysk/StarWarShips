import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Starshipcard from '../components/StarShipCard';

 const SwApi =() => {
    const [shipData,setShipData] = useState([])
        
    async function fetchdata() {
         try {
            const peopleURL   = axios.get("https://swapi.dev/api/people/")
            const planetsURL  = axios.get("https://swapi.dev/api/planets/")
            const filmsURL    = axios.get("https://swapi.dev/api/films/")
            const speciesURL  = axios.get("https://swapi.dev/api/species/")
            const vehiclesURL = axios.get("https://swapi.dev/api/vehicles/")
            const starShipsURL= axios.get("https://swapi.dev/api/starships/")
            const response = await Promise.all( [starShipsURL,peopleURL,planetsURL,filmsURL,speciesURL,vehiclesURL ]);
            const data = (response.map ((response)=> response.data.results))
            setShipData(data.flat())
            console.log (data)
         } catch (error) {
             console.error(error);
         }
     }

    useEffect(()=>{fetchdata()},[] )

    return (
      <div id= 'sw-api'> 
         {/* <button onClick={(fetchShip)}> Fetch </button> */}        
            {shipData.map((ship) => <Starshipcard key={ship?.name} ship={ship}/>)}
            
      </div>
    );
}

export default SwApi;
