//inbuilt compoents
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Starshipcard from '../components/StarShipCard';

const SwApi = (starShip) => {

    const [shipData,setShipData] = useState([])
    
    const fetchShip = async () => {
        try {
             
            const response = await axios.get('https://swapi.dev/api/starships/')
            setShipData(response.data.results)

        } catch (error) {
            console.error(error)
        } 
      
    }

    useEffect(()=>{fetchShip()},[] )

    return (
       <div id='sw-api' > 
        {/* <button onClick={(fetchShip)}> Fetch </button> */}        
        {shipData.map((ship) => <Starshipcard key={ship?.name} ship={ship}/>)}
       
       </div>
    );
}

export default SwApi;