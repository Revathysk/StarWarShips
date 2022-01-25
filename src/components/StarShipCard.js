import React from 'react';

const Starshipcard = (ship) => {
    console.log("in ship card", ship.ship.name)
    return (
        // <div id='starship' >
        //      <h3> {ship.ship.name} </h3>
        // </div>
        <div className="card starShip" style={{width: '18rem'}} >
        <div className="card-body">
            { ship.ship.name
              ?<h5 className="card-title">{ship.ship.name}</h5>
              :<h5 className="card-title">{ship.ship.title}</h5>
            }         
          
         </div>
      </div>
    );
}

export default Starshipcard;

