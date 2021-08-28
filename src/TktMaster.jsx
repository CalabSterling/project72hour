import React, { useState, useEffect } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody,Container, Row, Col 
  } from 'reactstrap';
import TktMasterChild from './TktMasterChild';



const TktMaster = (props) => {
const [games, setgames] = useState([]);
 var latitude = props.position.lat  
 var longitude = props.position.lon 

    const handleClick = async() => {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=QInF0b7Aa2nMHrALmSHEEq4uwNwr5un8&latlong=${latitude},${longitude}&size=10`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data._embedded.events);
        setgames(data._embedded.events);
    }

    
    function displayEvents () {
    return (games.map(game => <TktMasterChild name={game.name} date={game.dates.start.localDate} time={game.dates.start.localTime} price={game.priceRanges[0].min} url={game.url}/>))

    } 


    return (
         <div>
         <div>
             <Container>
                 <Row xs="4">

             <CardDeck>
            {displayEvents()}

             </CardDeck>
            </Row>
             </Container>

         </div>

         <button onClick={handleClick}>Click Me</button>
    </div>
     );


}
 
export default TktMaster;