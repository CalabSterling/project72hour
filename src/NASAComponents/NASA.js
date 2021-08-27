import React from 'react';
import {Button} from 'reactstrap';

let day = new Date();
var dd = String(day.getDate()).padStart(2, '0');
var mm = String(day.getMonth() + 1).padStart(2, '0'); 
var yyyy = day.getFullYear();
//let today = `${yyyy}-${mm}-${dd}`

const NASA = (props) => {
    const key = 'Z7E5A8YqjoP6Gw65BfND2d2jnsypTLPDtQqYLDGs';
    let long = props
    let lat = props.lat
    console.log(lat)
    
    function fetch() {
    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2021-08-01&api_key=${key}`)
        .then(res => res.json())
        .then(data => console.log(data.url))
        .catch(err => console.log(err))
    }

    return ( 
        <div>
                <div className="nasaPic">

                </div>
                <Button type="submit" onClick={fetch}>Get Pic</Button>
        </div>
     );
}
 
export default NASA;