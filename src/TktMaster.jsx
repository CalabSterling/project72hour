import React, { useState, useEffect } from 'react';


const TktMaster = (props) => {
    
    
    const handleClick = async() => {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=QInF0b7Aa2nMHrALmSHEEq4uwNwr5un8`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data._embedded.events);
        
    }



    return (
         <div>
         <p>Hello from Ticketmaster</p>

         <button onClick={handleClick}>Click Me</button>
    </div> );


}
 
export default TktMaster;