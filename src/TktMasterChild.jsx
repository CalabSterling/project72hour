import React, { useState, useEffect } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Col
  } from 'reactstrap';

const TktMasterChild = (props) => {
    return (
         <div id="cards">
        <Col lg="10">
         <Card style={{width: '18rem'}}>
         <CardBody>
           <CardTitle tag="h5">{props.name}</CardTitle>
           <CardSubtitle tag="h6" className="mb-2 text-muted">${props.price}</CardSubtitle>
           <CardText>{props.date} - {props.time}pm </CardText>
           <Button href={props.url} target="_blank" id="tktmaster-button">Buy Tickets</Button>
         </CardBody>
       </Card>
       </Col>

             </div> );
}
 
export default TktMasterChild;